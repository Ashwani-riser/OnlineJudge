import mongoose from "mongoose";
import { Contest } from "../models/contest.model.js";
import { Problem } from "../models/problem.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { getContestStatus } from "../utils/contestStatus.js";

const createContest = asyncHandler(async (req, res) => {

    const {
        title,
        description,
        startTime,
        endTime,
        problems = []
    } = req.body;

    if (!title?.trim()) {
        throw new ApiError(400, "Contest title is required");
    }

    if (!startTime || !endTime) {
        throw new ApiError(400, "Start time and end time are required");
    }

    const start = new Date(startTime);
    const end = new Date(endTime);

    if (start >= end) {
        throw new ApiError(
            400,
            "End time must be greater than start time"
        );
    }

    if (start <= new Date()) {
        throw new ApiError(
            400,
            "Contest must be scheduled in future"
        );
    }

    // Verify all problems exist

    if (problems.length > 0) {

        const existingProblems =
            await Problem.countDocuments({
                _id: { $in: problems }
            });

        if (existingProblems !== problems.length) {
            throw new ApiError(
                400,
                "One or more problem IDs are invalid"
            );
        }
    }

    const contest = await Contest.create({
        title,
        description,
        startTime: start,
        endTime: end,
        problems,
        createdBy: req.user._id
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            contest,
            "Contest created successfully"
        )
    );
});

const getAllContests = asyncHandler(async (req, res) => {

    const contests = await Contest.find()
        .populate("createdBy", "username")
        .sort({ startTime: 1 });

    const contestsWithStatus = contests.map((contest) => {

        const contestObj = contest.toObject();

        contestObj.status =
            getContestStatus(contest);

        return contestObj;
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            contestsWithStatus,
            "Contests fetched successfully"
        )
    );
});

const getContestById = asyncHandler(async (req, res) => {

    const { contestId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(contestId)) {
        throw new ApiError(400, "Invalid contest id");
    }

    const contest = await Contest.findById(contestId)
        .populate(
            "createdBy",
            "username fullName"
        )
        .populate({
            path: "problems",
            select:
                "title difficulty tags"
        });

    if (!contest) {
        throw new ApiError(
            404,
            "Contest not found"
        );
    }

    const contestObj =
        contest.toObject();

    contestObj.status =
        getContestStatus(contest);

    contestObj.participantCount =
        contest.participants.length;

    return res.status(200).json(
        new ApiResponse(
            200,
            contestObj,
            "Contest fetched successfully"
        )
    );
});

const updateContest = asyncHandler(async (req, res) => {
// Rules
// ✅ Admin only

// ✅ Contest exists

// ✅ Contest UPCOMING hona chahiye

// ❌ RUNNING contest update nahi hoga

// ❌ ENDED contest update nahi hoga

// ✅ startTime < endTime

// ✅ Problem ids valid honi chahiye

    const { contestId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(contestId)) {
        throw new ApiError(400, "Invalid contest id");
    }

    const contest = await Contest.findById(contestId);

    if (!contest) {
        throw new ApiError(
            404,
            "Contest not found"
        );
    }

    const status =
        getContestStatus(contest);

    if (status !== "UPCOMING") {
        throw new ApiError(
            400,
            "Contest already started"
        );
    }

    const {
        title,
        description,
        startTime,
        endTime,
        problems,
        isPublic
    } = req.body;

    const updatedStart =
        startTime
            ? new Date(startTime)
            : contest.startTime;

    const updatedEnd =
        endTime
            ? new Date(endTime)
            : contest.endTime;

    if (updatedStart >= updatedEnd) {
        throw new ApiError(
            400,
            "End time must be after start time"
        );
    }

    if (problems) {

        const validProblems =
            await Problem.countDocuments({
                _id: { $in: problems }
            });

        if (
            validProblems !== problems.length
        ) {
            throw new ApiError(
                400,
                "Invalid problem ids"
            );
        }

        contest.problems = problems;
    }

    if (title !== undefined)
        contest.title = title;

    if (description !== undefined)
        contest.description = description;

    if (startTime !== undefined)
        contest.startTime = startTime;

    if (endTime !== undefined)
        contest.endTime = endTime;

    if (isPublic !== undefined)
        contest.isPublic = isPublic;

    await contest.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            contest,
            "Contest updated successfully"
        )
    );
});
const deleteContest = asyncHandler(async (req, res) => {

    const contest = req.contest;

    const status = getContestStatus(contest);

    if (status !== "UPCOMING") {
        throw new ApiError(
            400,
            "Only upcoming contests can be deleted"
        );
    }

    await contest.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Contest deleted successfully"
        )
    );
});



export { createContest, getAllContests, getContestById, updateContest, deleteContest };
import { Contest } from "../models/contest.model.js";
import { Problem } from "../models/problem.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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

export { createContest };
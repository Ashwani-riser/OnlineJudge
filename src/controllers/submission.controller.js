import { Submission } from "../models/submission.model.js";
import { Problem } from "../models/problem.model.js";

import { judgeSubmission } from "../judge/judgeSubmission.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createSubmission = asyncHandler(async (req, res) => {

    const {
        problemId,
        language,
        sourceCode
    } = req.body;

    const problem = await Problem.findById(
        problemId
    );

    if (!problem) {
        throw new ApiError(
            404,
            "Problem not found"
        );
    }
    
    const submission =
        await Submission.create({
            userId: req.user._id,
            problemId,
            language,
            sourceCode,
            verdict: "Pending"
        });


    await judgeSubmission(submission._id);

    const updatedSubmission=await Submission.findById(submission._id);
    

    return res.status(201).json(
    new ApiResponse(
        201,
        updatedSubmission,
        "Submission judged successfully"
    )
);
});                                                                                                                                                                                                                                                                                                                                                                                 

const getMySubmissions = asyncHandler(async (req, res) => {

    const submissions =
        await Submission.find({
            userId: req.user._id
        })
        .select("-sourceCode")
        .populate("problemId", "title")
        .sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            submissions,
            "Submissions fetched successfully"
        )
    );
});

export {
    createSubmission,
    getMySubmissions
};
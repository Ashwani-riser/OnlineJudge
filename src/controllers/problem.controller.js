import { Problem } from "../models/problem.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProblem = asyncHandler(async (req, res) => {

    const {
        title,
        slug,
        statement,
        difficulty,
        constraints,
        inputFormat,
        outputFormat,
        sampleInput,
        sampleOutput,
        tags
    } = req.body;

    const existedProblem =
        await Problem.findOne({
            $or: [
                { title },
                { slug }
            ]
        });

    if (existedProblem) {
        throw new ApiError(
            409,
            "Problem already exists"
        );
    }

    const problem =
        await Problem.create({
            title,
            slug,
            statement,
            difficulty,
            constraints,
            inputFormat,
            outputFormat,
            sampleInput,
            sampleOutput,
            tags,
            createdBy: req.user._id
        });

    return res.status(201).json(
        new ApiResponse(
            201,
            problem,
            "Problem created successfully"
        )
    );
});

const getAllProblems = asyncHandler(async (req, res) => {

    const problems =
        await Problem.find()
            .select("-__v");//mongoDB ka version field hide kar do

    return res.status(200).json(
        new ApiResponse(
            200,
            problems,
            "Problems fetched successfully"
        )
    );
});

export {
    createProblem,
    getAllProblems
};
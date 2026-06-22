import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        problemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true
        },

        language: {
            type: String,
            enum: ["cpp"],
            required: true
        },

        sourceCode: {
            type: String,
            required: true
        },

        verdict: {
            type: String,
            enum: [
                "Pending",
                "Accepted",
                "Wrong Answer",
                "Compilation Error",
                "Runtime Error",
                "Time Limit Exceeded"
            ],
            default: "Pending"
        },

        executionTime: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

export const Submission = mongoose.model(
    "Submission",
    submissionSchema
);
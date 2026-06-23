import { Submission } from "../models/submission.model.js";
import { Problem } from "../models/problem.model.js";

import { runCpp } from "./runCpp.js";
import { compareOutput } from "./compareOutput.js";

export const judgeSubmission = async (submissionId) => {

    const submission = await Submission.findById(
        submissionId
    );

    if (!submission) {
        throw new Error("Submission not found");
    }

    const problem = await Problem.findById(
        submission.problemId
    );

//     const testCases = await TestCase.find({
//     problemId: problem._id
//    });

    if (!problem) {
        throw new Error("Problem not found");
    }

    let verdict = "Accepted";

    for (const testCase of problem.testCases) {

        const result = await runCpp(
            submission.sourceCode,
            testCase.input
        );

        if (!result.success) {

            verdict = result.type;
            break;
        }

        const isCorrect = compareOutput(
            result.output,
            testCase.output
        );

        if (!isCorrect) {

            verdict = "Wrong Answer";
            break;
        }
    }

    submission.verdict = verdict;

    await submission.save();

    return verdict;
};
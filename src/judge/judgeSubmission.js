import { Submission } from "../models/submission.model.js";
import { Problem } from "../models/problem.model.js";
import { TestCase } from "../models/testcase.model.js";

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

    if (!problem) {
        throw new Error("Problem not found");
    }

    const testCases = await TestCase.find({
        problemId: problem._id,
        isHidden: true
    });

    let verdict = "Accepted";
    let maxExecutionTime = 0;

    for (const testCase of testCases) {

        // const startTime = Date.now();

        const result = await runCpp(
            submission.sourceCode,
            testCase.input
        );

        // const endTime = Date.now();

        // const executionTime =
        //     endTime - startTime;

        maxExecutionTime = Math.max(
            maxExecutionTime,
            result.executionTime ||0
        );

        if (!result.success) {
    
            verdict = result.type;
            if (result.type === "Compilation Error") {
              submission.compileError = result.error;
            }
            break;
        }

        const isCorrect = compareOutput(
            result.output,
            testCase.expectedOutput
        );

        if (!isCorrect) {

            verdict = "Wrong Answer";
            break;
        }
    }

    if (verdict !== "Compilation Error") {
    submission.compileError = null;
    }

    submission.verdict = verdict;
    submission.executionTime =
        maxExecutionTime;

    await submission.save();

    return verdict;
};
// initialy hum veridict ko Accepted assume kar liya phir humne ussa const result pa chalaya agr waha compillation error ya runtime error ya time limit exceed hua to humne verdict ko uss type me change kar diya aur break kar diya loop ko agr output wrong hua to humne verdict ko wrong answer me change kar diya aur break kar diya loop ko.
// src/services/leaderboard.service.js

import mongoose from "mongoose";
import Contest from "../models/contest.model.js";
import Submission from "../models/submission.model.js";
import calculatePenalty from "../helpers/penalty.helper.js";
import ApiError from "../utils/ApiError.js";

const getLeaderboard = async (contestId) => {

    // Fetch contest
    const contest = await Contest.findById(contestId)
        .select("startTime problems");

    if (!contest) {
        throw new ApiError(404, "Contest not found");
    }

    // Aggregate submissions grouped by user
    const users = await Submission.aggregate([
        {
            $match: {//isi contest ka submission hi hume chahiye
                contestId: new mongoose.Types.ObjectId(contestId)
            }
        },
        {
            $sort: {//oldest submission ko pehle
                createdAt: 1
            }
        },
        {
            $group: {//user ke hisab se submissions group karo
                _id: "$userId",
                submissions: {
                    $push: {
                        problemId: "$problemId",
                        verdict: "$verdict",
                        createdAt: "$createdAt"
                    }
                }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user" //Lookup array return karta hai.
        },
        {
            $project: {
                _id: 0,
                user: {
                    _id: "$user._id",
                    username: "$user.username"
                },
                submissions: 1
            }
        }
    ]);

    // Contest problem order
    const problemOrder = new Map();

    contest.problems.forEach((problemId, index) => {
        problemOrder.set(problemId.toString(), index);
    });

    const leaderboard = [];

    for (const contestant of users) {

        const stats = calculatePenalty(
            contestant.submissions,
            contest.startTime
        );

        // Sort problem-wise results according to contest problem order
        stats.results.sort((a, b) => {

            const orderA =
                problemOrder.get(a.problemId) ?? Number.MAX_SAFE_INTEGER;

            const orderB =
                problemOrder.get(b.problemId) ?? Number.MAX_SAFE_INTEGER;

            return orderA - orderB;
        });

        leaderboard.push({
            user: contestant.user,
            solved: stats.solved,
            penalty: stats.penalty,
            lastAcTime: stats.lastAcTime,
            results: stats.results
        });
    }

    // Codeforces sorting
    leaderboard.sort((a, b) => {

        if (a.solved !== b.solved)
            return b.solved - a.solved;

        if (a.penalty !== b.penalty)
            return a.penalty - b.penalty;

        if (a.lastAcTime !== b.lastAcTime)
            return a.lastAcTime - b.lastAcTime;

        return a.user.username.localeCompare(b.user.username);
    });

    // Rank calculation (Codeforces style)
    let previous = null;

    for (let i = 0; i < leaderboard.length; i++) {

        if (
            previous &&
            leaderboard[i].solved === previous.solved &&
            leaderboard[i].penalty === previous.penalty &&
            leaderboard[i].lastAcTime === previous.lastAcTime
        ) {
            leaderboard[i].rank = previous.rank;
        } else {
            leaderboard[i].rank = i + 1;
        }

        previous = leaderboard[i];
    }

    // Remove internal field before sending response
    leaderboard.forEach(user => {
        delete user.lastAcTime;
    });

    return leaderboard;
};

export default getLeaderboard;
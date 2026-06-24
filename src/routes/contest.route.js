import { Router } from "express";

import {
    createContest,
    getAllContests,
    getContestById,
    updateContest,
    deleteContest,
    // registerContest,
    // getLeaderboard
} from "../controllers/contest.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = Router();

router.route("/")
    .post(verifyJWT, verifyAdmin, createContest)
    .get(getAllContests);

 router.route("/:contestId")
     .get(getContestById)
     .patch(verifyJWT, verifyAdmin, updateContest)
     .delete(verifyJWT, verifyAdmin, deleteContest);

// router.route("/:contestId/register")
//     .post(verifyJWT, registerContest);

// router.route("/:contestId/leaderboard")
//     .get(getLeaderboard);

export default router;
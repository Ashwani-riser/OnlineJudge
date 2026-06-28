import { Router } from "express";

import {
    createSubmission,
    getMySubmissions,
    getAllSubmissions,
    getSubmissionById
} from "../controllers/submission.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Create Practice Submission
router.post(
    "/",
    verifyJWT,
    createSubmission
);

// Current User Submissions
router.get(
    "/my",
    verifyJWT,
    getMySubmissions
);

// Get All Submissions (with filters, pagination)
router.get(
    "/",
    verifyJWT,
    getAllSubmissions
);

// Get Single Submission
router.get(
    "/:submissionId",
    verifyJWT,
    getSubmissionById
);

export default router;
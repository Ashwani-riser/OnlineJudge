import { Router } from "express";

import {
    createSubmission,
    getMySubmissions
} from "../controllers/submission.controller.js";

import {
    verifyJWT
} from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/",
    verifyJWT,
    createSubmission
);

router.get(
    "/my-submissions",
    verifyJWT,
    getMySubmissions
);

export default router;
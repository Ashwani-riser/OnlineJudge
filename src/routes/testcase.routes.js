import { Router } from "express";

import {
    createTestCase,
    getProblemTestCases
} from "../controllers/testcase.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/",
    verifyJWT,
    createTestCase
);

router.get(
    "/:problemId",
    verifyJWT,
    getProblemTestCases
);

export default router;
import { Router } from "express";

import {
    createProblem,
    getAllProblems
} from "../controllers/problem.controller.js";

import { verifyJWT }
from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/",
    verifyJWT,
    createProblem
);

router.get(
    "/",
    getAllProblems
);

export default router;
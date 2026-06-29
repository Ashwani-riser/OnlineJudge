import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import problemRouter from "./routes/problem.routes.js";
import testcaseRouter from "./routes/testcase.routes.js";
import submissionRouter from "./routes/submission.routes.js";
import contestRouter from "./routes/contest.route.js";
import { apiLimiter } from "./middlewares/rateLimit.middleware.js";
import helmetMiddleware from "./middlewares/helmet.middleware.js";

const app = express();
app.disable("x-powered-by");
app.use(helmetMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.use("/api", apiLimiter);

app.use("/api/v1/users", authRouter);
app.use("/api/v1/problems", problemRouter);
app.use("/api/v1/testcases", testcaseRouter);
app.use("/api/v1/submissions", submissionRouter);
app.use("/api/v1/contests",contestRouter);


app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || [],
        ...(process.env.NODE_ENV === "development" && {
            stack: err.stack,
        }),
    });
});



export { app };
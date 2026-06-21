import { Router } from "express";
import { registerUser ,loginUser,getCurrentUser} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/currentUser", verifyJWT, getCurrentUser);

export default router;
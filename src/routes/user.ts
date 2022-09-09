import { Router } from "express";
import User from "../controller/userController";

const router = Router();
const userController = new User();

router.get("/users", userController.get);

export default router;

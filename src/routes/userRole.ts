import { Router } from "express";
import UserRoleController from "../controller/UserRoleController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const userRoleController = new UserRoleController();

router.post("/", userRoleController.save);

export default router;

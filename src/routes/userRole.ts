import { Router } from "express";
import UserRoleController from "../controller/UserRoleController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const userRoleController = new UserRoleController();

router.get("/user/:usuarioId/roles", userRoleController.getById);
router.post("/user/:usuarioId", userRoleController.save);

export default router;

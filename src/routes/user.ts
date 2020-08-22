import { Router } from "express";
import UserController from "../controller/UserController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const userController = new UserController();

router.get("/", userController.all);
router.get("/:login", userController.getByLogin);
router.post("/", userController.save);
router.delete("/:usuarioId", userController.remove);

export default router;

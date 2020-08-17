import { Router } from "express";
import UserController from "../controller/UserController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const userController = new UserController();

router.get("/", userController.getAll);

router.get("/:login", userController.getByLogin);

router.post("/create", userController.save);

// router.patch("/update/:login", checkJwt, userController.update);

router.delete("/delete/:usuarioId", userController.remove);

export default router;

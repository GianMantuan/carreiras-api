import { Router } from "express";
import UserTypeController from "../controller/UserTypeController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const userController = new UserTypeController();

// router.get("/", userController.getAll);

// router.get("/:login", userController.getByLogin);

router.post("/create", userController.save);

// router.patch("/update/:login", checkJwt, userController.update);

// router.delete("/delete/:usuarioId", userController.remove);

export default router;

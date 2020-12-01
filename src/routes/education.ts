import { Router } from "express";
import EducationController from "../controller/EducationController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const educationController = new EducationController();

router.get("/", checkJwt, educationController.all);
router.get("/:formacaoId", checkJwt, educationController.getById)
router.post("/", checkJwt, educationController.save);
router.delete("/:formacaoId", checkJwt, educationController.delete);

export default router;

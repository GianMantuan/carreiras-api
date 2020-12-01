import { Router } from "express";
import ExperienceController from "../controller/ExperienceController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const experienceController = new ExperienceController();

router.get("/", checkJwt, experienceController.all);
router.get("/:experienciaId", checkJwt, experienceController.getById)
router.post("/", checkJwt, experienceController.save);
router.delete("/:experienciaId", checkJwt, experienceController.delete);

export default router;

import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";

import CurriculumController from "../controller/CurriculumController";
import ExperienceController from "../controller/ExperienceController";

const router = Router();
const curriculumController = new CurriculumController();
const experienceController = new ExperienceController();

// Routes of experience
router.get("/:curriculoId/experiences", experienceController.getById);

// Routes of certificate
// router.get("/:curriculoId/certificates", certificateController.getById)

// Routes of graduation
// router.get("/:curriculoId/graduations", graduationController.getById)

// Routes of Curriculum
router.post("/", curriculumController.save);

export default router;

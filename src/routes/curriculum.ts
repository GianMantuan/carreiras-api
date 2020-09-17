import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";

import CurriculumController from "../controller/CurriculumController";
import ExperienceController from "../controller/ExperienceController";
import CertificateController from "../controller/CertificateController";
import EducationController from "../controller/EducationController";

const router = Router();
const curriculumController = new CurriculumController();
const experienceController = new ExperienceController();
const certificateController = new CertificateController();
const educationController = new EducationController();

// Routes of experience
router.get("/:curriculoId/experiences", experienceController.getById);

// Routes of certificate
router.get("/:curriculoId/certificates", certificateController.getById);

// Routes of graduation
router.get("/:curriculoId/educations", educationController.getById);

// Routes of Curriculum
router.post("/", curriculumController.save);

export default router;

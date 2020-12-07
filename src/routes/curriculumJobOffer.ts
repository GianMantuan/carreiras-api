import { Router } from "express";
import CurriculumJobOfferController from "../controller/CurriculumJobOfferController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const curriculumJobOfferController = new CurriculumJobOfferController();

router.get("/", checkJwt, curriculumJobOfferController.all);
router.post("/", checkJwt, curriculumJobOfferController.save);

export default router;

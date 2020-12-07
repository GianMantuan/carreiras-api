import { Router } from "express";
import JobOfferController from "../controller/JobOfferController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const jobOfferController = new JobOfferController();

router.get("/", checkJwt, jobOfferController.all);
router.get("/curriculum", checkJwt, jobOfferController.getCurriculumJob);
router.get("/:usuarioId", checkJwt, jobOfferController.getById)
router.post("/", checkJwt, jobOfferController.save);
router.delete("/:vaga", checkJwt, jobOfferController.delete);

export default router;

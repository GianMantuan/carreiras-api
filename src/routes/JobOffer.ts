import { Router } from "express";
import JobOfferController from "../controller/JobOfferController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const jobOfferController = new JobOfferController();

router.get("/", jobOfferController.all);
router.post("/", jobOfferController.save);
router.delete("/:vaga", jobOfferController.delete);

export default router;

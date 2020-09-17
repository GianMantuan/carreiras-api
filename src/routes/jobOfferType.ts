import { Router } from "express";
import JobOfferTypeController from "../controller/JobOfferTypeController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const jobOfferTypeController = new JobOfferTypeController();

router.get("/", jobOfferTypeController.all);
router.post("/", jobOfferTypeController.save);
router.delete("/:tipoVaga", jobOfferTypeController.delete);

export default router;

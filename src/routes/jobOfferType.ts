import { Router } from "express";
import JobOfferTypeController from "../controller/JobOfferTypeController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const jobOfferTypeController = new JobOfferTypeController();

router.get("/", checkJwt, jobOfferTypeController.all);
router.post("/", checkJwt, jobOfferTypeController.save);
router.delete("/:tipoVagaId", checkJwt, jobOfferTypeController.delete);

export default router;

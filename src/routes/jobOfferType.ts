import { Router } from "express";
import routes from ".";
import JobOfferTypeController from "../controller/JobOfferTypeController";
import UserRoleController from "../controller/UserRoleController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const jobOfferTypeController = new JobOfferTypeController();

router.get("/", jobOfferTypeController.all);
router.post("/", jobOfferTypeController.save);
routes.delete("/:tipoVaga", jobOfferTypeController.delete);

export default router;

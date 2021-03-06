import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import ContactController from "../controller/ContactController";

const router = Router();
const contactController = new ContactController();

router.post("/", checkJwt, contactController.save);

export default router;

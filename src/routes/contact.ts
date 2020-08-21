import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import ContactController from "../controller/ContactController";

const router = Router();
const contactController = new ContactController();

router.get("/user/:usuarioId/contacts", contactController.getById);
router.post("/user/:usuarioId", contactController.save);

export default router;

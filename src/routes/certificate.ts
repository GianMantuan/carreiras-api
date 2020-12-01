import { Router } from "express";
import CertificateController from "../controller/CertificateController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
const certificateController = new CertificateController();

router.get("/", checkJwt, certificateController.all);
router.get("/:certificadoId", checkJwt, certificateController.getById)
router.post("/", checkJwt, certificateController.save);
router.delete("/:certificadoId", checkJwt, certificateController.delete);

export default router;

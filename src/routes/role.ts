import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import RoleController from "../controller/RoleController";

const router = Router();
const roleController = new RoleController();

router.get("/", roleController.all);
router.post("/", roleController.save);
router.delete("/:tipoId", roleController.remove);

export default router;

import { Router } from "express";
import ContactController from "../controller/ContactController";
import CurriculumController from "../controller/CurriculumController";
import UserController from "../controller/UserController";
import UserRoleController from "../controller/UserRoleController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

const userController = new UserController();
const contactController = new ContactController();
const userRoleController = new UserRoleController();
const curriculumController = new CurriculumController();

// Routes of Contact
router.get("/:usuarioId/contact", contactController.getById);

//Routes of UserRole
router.get("/:usuarioId/roles", userRoleController.getById);

// Routes of Curriculum
router.get("/:usuarioId/curriculum", curriculumController.getById);

// Routes of User
router.get("/:login", userController.getByLogin);
router.get("/", userController.all);
router.post("/", userController.save);
router.delete("/:usuarioId", userController.remove);

export default router;

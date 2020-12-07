import { Router } from "express";
import auth from "./auth";
import user from "./user";
import contact from "./contact";
import role from "./role";
import userRole from "./userRole";
import curriculum from "./curriculum";
import experience from "./experience";
import education from "./education";
import certificate from "./certificate";
import jobOffer from './jobOffer'
import jobOfferType from "./jobOfferType";
import curriculumJobOffer from './curriculumJobOffer'

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/role", role);
routes.use("/contact", contact);
routes.use("/curriculum", curriculum);
routes.use("/experience", experience);
routes.use("/education", education);
routes.use("/certificate", certificate);
routes.use("/user_role", userRole);
routes.use("/joboffer", jobOffer);
routes.use("/joboffer_type", jobOfferType);
routes.use("/curriculum_joboffer", curriculumJobOffer);

export default routes;

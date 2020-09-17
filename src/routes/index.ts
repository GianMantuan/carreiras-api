import { Router } from "express";
// import auth from "./auth";
import user from "./user";
import contact from "./contact";
import role from "./role";
import curriculum from "./curriculum";
import experience from "./experience";
import userRole from "./userRole";
import jobOfferType from "./jobOfferType";

const routes = Router();

// routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/role", role);
routes.use("/contact", contact);
routes.use("/curriculum", curriculum);
routes.use("/experience", experience);
routes.use("/user_role", userRole);
routes.use("/joboffer_type", jobOfferType);

export default routes;

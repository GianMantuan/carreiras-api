import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import role from "./role";
import userRole from "./userRole";
import contact from "./contact";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/role", role);
routes.use("/user_role", userRole);
routes.use("/user_contact", contact);

export default routes;

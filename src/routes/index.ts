import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import userType from "./userType";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/user/type", userType);

export default routes;

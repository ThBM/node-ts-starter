import {Router} from "express";
import {HomeController} from "../controllers/HomeController";

export const HomeRouter = Router();

HomeRouter
  .get("/", HomeController.home)

export default HomeRouter;

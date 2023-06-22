import Router from "express";
import httpStatus from "http-status";
import { getPassengerTravels } from "../controllers/travels.controllers.js";

const travelsRouter = Router()

travelsRouter.get("/passengers/travels",getPassengerTravels);

export default travelsRouter
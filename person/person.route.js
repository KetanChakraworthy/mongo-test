import express from "express";
import { getPersonById, getPersons } from "./person.controller.js";

const personRouter = express.Router();

personRouter.get("/", getPersons);
personRouter.get("/:personId", getPersonById);
personRouter.post("/create");
personRouter.put("/update/:personId");
personRouter.delete("/delete/:personId");

export default personRouter;

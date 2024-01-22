import { connect } from "./mongo.connect.js";
import express from "express";
import personRouter from "./person/person.route.js";
import { verify } from "./middleware/verify.js";

const port = 1010;
const app = express();
connect();

app.use("/api/person", verify, personRouter);

app.listen(port, () => console.log("Listening on Port :>> ", port));

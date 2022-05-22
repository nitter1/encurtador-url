import express from "express";
import { UrlController } from "controller/UrlController";
import { MongoConnection } from "./database/MongoConnection";

const app = express();

app.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new UrlController();

app.post("/shorten", urlController.shorten);

app.get("/:hash", urlController.redirect);

app.listen(5000, () => console.log("Express listening"));

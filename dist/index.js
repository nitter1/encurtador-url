"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UrlController_1 = require("controller/UrlController");
const MongoConnection_1 = require("./database/MongoConnection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new UrlController_1.UrlController();
app.post("/shorten", urlController.shorten);
app.get("/:hash", urlController.redirect);
app.listen(5000, () => console.log("Express listening"));
//# sourceMappingURL=index.js.map
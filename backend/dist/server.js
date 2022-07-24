"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("./route");
const app = (0, express_1.default)();
const port = 8888;
app.get('/', route_1.createCourse);
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});

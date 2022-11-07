"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    try {
        res.status(200).send('Hello from express');
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});

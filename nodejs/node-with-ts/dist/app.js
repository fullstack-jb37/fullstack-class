"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    try {
        console.log(req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello From Server');
    }
    catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
    }
});
server.listen(3440, () => console.log('Listening on port 3440'));

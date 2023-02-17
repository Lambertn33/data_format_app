"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const main = () => {
    const app = (0, express_1.default)();
    const allowedOrigins = ['*'];
    const options = {
        origin: allowedOrigins,
        methods: "GET,HEAD,POST,READ",
    };
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)(options));
    app.use('/', routes_1.default.mainRoutes);
    app.use('/files', routes_1.default.filesRoutes);
    app.listen(5000, () => {
        console.log('server listen on port 5000');
    });
};
main();

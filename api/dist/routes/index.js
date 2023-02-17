"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_route_1 = __importDefault(require("./main.route"));
const files_route_1 = __importDefault(require("./files.route"));
exports.default = {
    mainRoutes: main_route_1.default,
    filesRoutes: files_route_1.default
};

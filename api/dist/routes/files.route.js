"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_controller_1 = require("../controllers/files.controller");
const files_constants_1 = __importDefault(require("../constants/files.constants"));
const router = (0, express_1.Router)();
router.get('/read-csv', (0, files_controller_1.readFile)(files_constants_1.default.csvFileName));
router.get('/read-prn', (0, files_controller_1.readFile)(files_constants_1.default.prnFileName));
exports.default = router;

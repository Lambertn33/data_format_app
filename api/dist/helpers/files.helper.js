"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileHelper = exports.readFileHelper = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        fs_1.default.mkdir('./uploads/', (err) => {
            cb(null, './uploads/');
        });
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const readFileHelper = (filename, res) => {
    const results = [];
    fs_1.default.createReadStream(`uploads/${filename}`)
        .pipe((0, csv_parser_1.default)())
        .on('data', (data) => results.push(data))
        .on('end', () => {
        res.send(results);
    });
};
exports.readFileHelper = readFileHelper;
exports.uploadFileHelper = (0, multer_1.default)({ storage });

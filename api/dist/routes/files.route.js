"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_helper_1 = require("../helpers/files.helper");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return (0, files_helper_1.readFileHelper)('csvfFileExample.csv', res);
});
router.post('/upload', files_helper_1.uploadFileHelper.single('csvfile'), (req, res) => {
    res.status(200).json({ message: 'file uploaded successfully' });
});
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileController_1 = require("../Controller/fileController");
const multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        console.log(file);
        cb(null, Date.now() + "." + ext);
    },
});
const upload = (0, multer_1.default)({ storage: storage }).single('file');
const router = express_1.default.Router();
router.post("/", fileController_1.uploadFile);
exports.default = router;

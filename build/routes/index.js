"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_1 = require("../middleware/image");
const urlParameter_1 = __importDefault(require("../validators/urlParameter"));
const imageProvider_1 = __importDefault(require("../controllers/imageProvider"));
const usage_1 = __importDefault(require("../controllers/usage"));
const router = (0, express_1.Router)();
router.use('/:imagename', [image_1.imageExtension, image_1.imageExist, urlParameter_1.default]);
router.get('/', usage_1.default);
router.get('/:imagename', imageProvider_1.default);
exports.default = router;

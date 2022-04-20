"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const thumbnailExists_1 = __importDefault(require("../utilities/thumbnailExists"));
const resizeImage_1 = __importDefault(require("../utilities/resizeImage"));
const getPath_1 = require("../utilities/getPath");
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imagename } = req.params;
    const { width, height } = req.query;
    const imagePath = (0, getPath_1.getImagePath)(imagename);
    if (width === undefined && height === undefined) {
        res.sendFile(imagePath);
    }
    else {
        const exists = yield (0, thumbnailExists_1.default)(imagename, width, height);
        if (!exists) {
            yield (0, resizeImage_1.default)(imagename, imagePath, width, height);
        }
        const thumbnailpath = (0, getPath_1.getThumbnailPath)(imagename, width, height);
        res.sendFile(thumbnailpath);
    }
});
exports.default = getImage;

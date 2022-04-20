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
exports.imageExtension = exports.imageExist = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const getPath_1 = require("../utilities/getPath");
const imageExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { imagename } = req.params;
    const imagepath = (0, getPath_1.getImagePath)(imagename);
    const exists = yield fs_extra_1.default.pathExists(imagepath);
    if (exists) {
        next();
    }
    else {
        res.status(404).send('Image not found');
    }
});
exports.imageExist = imageExist;
const imageExtension = (req, res, next) => {
    const { imagename } = req.params;
    const extension = imagename.split('.')[1];
    if (extension === undefined) {
        res.status(400).send('You should provide the extension of an image');
    }
    else if (extension !== 'jpg') {
        res.status(400).send('jpg is the only supported extension');
    }
    else {
        next();
    }
};
exports.imageExtension = imageExtension;

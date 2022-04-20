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
exports.listImages = exports.getThumbnailPath = exports.getImagePath = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const getImagePath = (imagename) => {
    return path_1.default.join(__dirname, '../../', 'media', 'images', imagename);
};
exports.getImagePath = getImagePath;
const getThumbnailPath = (imagename, width, height) => {
    const thumbnailPath = path_1.default.join(__dirname, '../../', 'media', 'thumbnails', '/');
    const output = `${thumbnailPath}${imagename.split('.')[0]}_${width}_${height}.jpg`;
    return output;
};
exports.getThumbnailPath = getThumbnailPath;
const listImages = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield fs_extra_1.default.readdir(path);
    return files;
});
exports.listImages = listImages;

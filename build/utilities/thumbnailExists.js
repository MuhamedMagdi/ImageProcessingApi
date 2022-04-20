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
const fs_extra_1 = __importDefault(require("fs-extra"));
const getPath_1 = require("./getPath");
const thumbnailExists = (imagename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const thumbnailPath = (0, getPath_1.getThumbnailPath)(imagename, width, height);
    const exists = yield fs_extra_1.default.pathExists(thumbnailPath);
    if (exists) {
        return true;
    }
    else {
        return false;
    }
});
exports.default = thumbnailExists;

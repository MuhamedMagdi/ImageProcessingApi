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
const resizeImage_1 = __importDefault(require("../../utilities/resizeImage"));
const getPath_1 = require("../../utilities/getPath");
describe('Testing the utilities', () => {
    it('should resize an image and save it to media/thumbnails', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagename = 'fjord.jpg';
        const imagePath = (0, getPath_1.getImagePath)(imagename);
        const imageWidth = 500;
        const imageHeight = 500;
        const resize = yield (0, resizeImage_1.default)(imagename, imagePath, imageWidth, imageHeight);
        const width = Object.values(resize).find((value) => value === imageWidth);
        const height = Object.values(resize).find((value) => value === imageHeight);
        expect(width).toEqual(imageWidth);
        expect(height).toEqual(imageHeight);
    }));
    it('should throw an error', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagename = 'fjord.png';
        const imagePath = (0, getPath_1.getImagePath)(imagename);
        const imageWidth = 500;
        const imageHeight = 500;
        const error = new Error(`Input file is missing: ${imagePath}`);
        yield expectAsync((0, resizeImage_1.default)(imagename, imagePath, imageWidth, imageHeight)).toBeRejectedWith(error);
    }));
});

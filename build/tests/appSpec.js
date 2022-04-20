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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
describe('Testing the api for image processing', () => {
    const server = (0, supertest_1.default)(app_1.default);
    describe('HTTP 20X requests', () => {
        it('should return the usage of the api', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield server.get('/api');
            expect(res.status).toEqual(200);
        }));
        it('should return the default image', () => __awaiter(void 0, void 0, void 0, function* () {
            const imagename = 'fjord.jpg';
            const res = yield server.get(`/api/${imagename}`);
            expect(res.status).toEqual(200);
        }));
        it('should return an image with the specified width and height', () => __awaiter(void 0, void 0, void 0, function* () {
            const imagename = 'fjord.jpg';
            const width = 200;
            const height = 200;
            const res = yield server.get(`/api/${imagename}?width=${width}&height=${height}`);
            expect(res.status).toEqual(200);
        }));
    });
    describe('HTTP 40X requests', () => {
        it('should send 404 status indicating that image does not exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const imagename = 'ImageNotFound.jpg';
            const res = yield server.get(`/api/${imagename}`);
            expect(res.text).toEqual('Image not found');
            expect(res.status).toEqual(404);
        }));
        it('should send 400 status indicating that it only accept .jpg images', () => __awaiter(void 0, void 0, void 0, function* () {
            const imagename = 'fjord.png';
            const res = yield server.get(`/api/${imagename}`);
            expect(res.text).toEqual('jpg is the only supported extension');
            expect(res.status).toEqual(400);
        }));
        it('should send 400 status indicating that width or height is not a number', () => __awaiter(void 0, void 0, void 0, function* () {
            const imagename = 'fjord.jpg';
            const width = 'A';
            const height = 'A';
            const res = yield server.get(`/api/${imagename}?width=${width}&height=${height}`);
            expect(res.text).toEqual('Width and Height should be integers');
            expect(res.status).toEqual(400);
        }));
        it('should send 400 status indicating that you did not provide the extention of the image', () => __awaiter(void 0, void 0, void 0, function* () {
            const imagename = 'fjord';
            const res = yield server.get(`/api/${imagename}`);
            expect(res.text).toEqual('You should provide the extension of an image');
            expect(res.status).toEqual(400);
        }));
    });
});

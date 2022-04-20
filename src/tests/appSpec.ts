import app from '../app';
import supertest from 'supertest';

describe('Testing the api for image processing', () => {
    const server = supertest(app);

    describe('HTTP 20X requests', () => {
        it('should return the usage of the api', async () => {
            const res = await server.get('/api');
            expect(res.text).toEqual(
                '{"usage":"Provide image name with extension after /api/, you can specify width and height"}'
            );
            expect(res.status).toEqual(200);
        });
        it('should return the default image', async () => {
            const imagename = 'fjord.jpg';
            const res = await server.get(`/api/${imagename}`);
            expect(res.status).toEqual(200);
        });
        it('should return an image with the specified width and height', async () => {
            const imagename = 'fjord.jpg';
            const width = 200;
            const height = 200;
            const res = await server.get(
                `/api/${imagename}?width=${width}&height=${height}`
            );
            expect(res.status).toEqual(200);
        });
    });

    describe('HTTP 40X requests', () => {
        it('should send 404 status indicating that image does not exists', async () => {
            const imagename = 'ImageNotFound.jpg';
            const res = await server.get(`/api/${imagename}`);
            expect(res.text).toEqual('Image not found');
            expect(res.status).toEqual(404);
        });
        it('should send 400 status indicating that it only accept .jpg images', async () => {
            const imagename = 'fjord.png';
            const res = await server.get(`/api/${imagename}`);
            expect(res.text).toEqual('jpg is the only supported extension');
            expect(res.status).toEqual(400);
        });
        it('should send 400 status indicating that width or height is not a number', async () => {
            const imagename = 'fjord.jpg';
            const width = 'A';
            const height = 'A';
            const res = await server.get(
                `/api/${imagename}?width=${width}&height=${height}`
            );
            expect(res.text).toEqual('Width and Height should be integers');
            expect(res.status).toEqual(400);
        });
        it('should send 400 status indicating that you did not provide the extention of the image', async () => {
            const imagename = 'fjord';
            const res = await server.get(`/api/${imagename}`);
            expect(res.text).toEqual(
                'You should provide the extension of an image'
            );
            expect(res.status).toEqual(400);
        });
    });
});

import imageResize from '../../utilities/resizeImage';
import { getImagePath } from '../../utilities/getPath';

describe('Testing the utilities', () => {
    it('should resize an image and save it to media/thumbnails', async () => {
        const imagename = 'fjord.jpg';
        const imagePath = getImagePath(imagename);
        const imageWidth = 500;
        const imageHeight = 500;
        const resize = await imageResize(
            imagename,
            imagePath,
            imageWidth,
            imageHeight
        );
        const width = Object.values(resize).find(
            (value: string | number): boolean => value === imageWidth
        );
        const height = Object.values(resize).find(
            (value: string | number): boolean => value === imageHeight
        );
        expect(width).toEqual(imageWidth);
        expect(height).toEqual(imageHeight);
    });
    fit('should throw an error', async () => {
        const imagename = 'fjord.png';
        const imagePath = getImagePath(imagename);
        const imageWidth = 500;
        const imageHeight = 500;
        const error = new Error(`Input file is missing: ${imagePath}`);
        await expectAsync(
            imageResize(imagename, imagePath, imageWidth, imageHeight)
        ).toBeRejectedWith(error);
    });
});

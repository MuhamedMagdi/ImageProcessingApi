import sharp from 'sharp';
import { getThumbnailPath } from './getPath';

const imageResize = async (
    imageName: string,
    imagePath: string,
    width: unknown,
    height: unknown
): Promise<void> => {
    const thumbnailPath = getThumbnailPath(imageName, imagePath, width, height);
    await sharp(imagePath)
        .resize(Number(width), Number(height))
        .toFile(thumbnailPath);
};

export default imageResize;

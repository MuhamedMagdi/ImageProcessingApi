import sharp from 'sharp';
import { getThumbnailPath } from './getPath';

const imageResize = async (
    imageName: string,
    imagePath: string,
    width: unknown,
    height: unknown
): Promise<object> => {
    const thumbnailPath = getThumbnailPath(imageName, width, height);
    const value = await sharp(imagePath)
        .resize(Number(width), Number(height))
        .toFile(thumbnailPath);
    return value;
};

export default imageResize;

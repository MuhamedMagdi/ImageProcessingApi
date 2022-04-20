import path from 'path';
import fs from 'fs-extra';

const getImagePath = (imagename: string): string => {
    return path.join(__dirname, '../../', 'media', 'images', imagename);
};

const getThumbnailPath = (
    imagename: string,
    width: unknown,
    height: unknown
): string => {
    const thumbnailPath = path.join(
        __dirname,
        '../../',
        'media',
        'thumbnails',
        '/'
    );
    const output = `${thumbnailPath}${
        imagename.split('.')[0]
    }_${width}_${height}.jpg`;
    return output;
};

const listImages = async (path: string): Promise<string[]> => {
    const files = await fs.readdir(path);
    return files;
};

export { getImagePath, getThumbnailPath, listImages };

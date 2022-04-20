import path from 'path';
import fs from 'fs-extra';

const thumbnailExists = async (
    imagename: string,
    width: unknown,
    height: unknown
): Promise<boolean> => {
    width = width as number;
    height = height as number;
    const thumbnailPath = path.join(
        __dirname,
        '../../',
        'media',
        'images',
        'thumbnail',
        imagename
    );
    const exists = await fs.pathExists(thumbnailPath);
    if (exists) {
        return true;
    } else {
        return false;
    }
};

export default thumbnailExists;

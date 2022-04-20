import fs from 'fs-extra';
import { getThumbnailPath } from './getPath';

const thumbnailExists = async (
    imagename: string,
    width: unknown,
    height: unknown
): Promise<boolean> => {
    const thumbnailPath = getThumbnailPath(imagename, width, height);
    const exists = await fs.pathExists(thumbnailPath);
    if (exists) {
        return true;
    } else {
        return false;
    }
};

export default thumbnailExists;

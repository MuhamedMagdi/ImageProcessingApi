import { Request, Response } from 'express';
import thumbnailExists from '../utilities/thumbnailExists';
import imageResize from '../utilities/resizeImage';
import { getImagePath, getThumbnailPath } from '../utilities/getPath';
const getImage = async (req: Request, res: Response) => {
    const { imagename } = req.params;
    const { width, height } = req.query;
    const imagePath = getImagePath(imagename);
    if (width === undefined && height === undefined) {
        res.sendFile(imagePath);
    } else {
        const exists = await thumbnailExists(imagename, width, height);
        if (!exists) {
            await imageResize(imagename, imagePath, width, height);
        }
        const thumbnailpath = getThumbnailPath(imagename, width, height);
        res.sendFile(thumbnailpath);
    }
};

export default getImage;

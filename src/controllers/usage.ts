import { Request, Response } from 'express';
import { getImagePath, listImages } from '../utilities/getPath';

const usage = async (req: Request, res: Response) => {
    const path = getImagePath('');
    const images = await listImages(path);
    res.send({ images: images });
};

export default usage;

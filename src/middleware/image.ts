import { Request, Response, NextFunction } from 'express';
import fs from 'fs-extra';
import { getImagePath } from '../utilities/getPath';

const imageExist = async (req: Request, res: Response, next: NextFunction) => {
    const { imagename } = req.params;
    const imagepath = getImagePath(imagename);
    const exists = await fs.pathExists(imagepath);
    if (exists) {
        next();
    } else {
        res.status(404).send('Image not found');
    }
};

const imageExtension = (req: Request, res: Response, next: NextFunction) => {
    const { imagename } = req.params;
    const extension = imagename.split('.')[1];
    if (extension === undefined) {
        res.status(400).send('You should provide the extension of an image');
    } else if (extension !== 'jpg') {
        res.status(400).send('jpg is the only supported extension');
    } else {
        next();
    }
};

export { imageExist, imageExtension };

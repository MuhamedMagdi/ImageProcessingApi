import { Request, Response, NextFunction } from 'express';

const checkvalue = (value: unknown): number => {
    if (isNaN(Number(value))) {
        return 0;
    }
    return value as number;
};

const checkWidthAndHeight = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { width, height } = req.query;
    if (width === undefined && height === undefined) {
        next();
    } else if (checkvalue(width) && checkvalue(height)) {
        next();
    } else {
        res.status(400).send('Width and Height should be integers');
    }
};

export default checkWidthAndHeight;

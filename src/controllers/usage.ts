import { Request, Response } from 'express';

const usage = (req: Request, res: Response) => {
    res.send({
        usage: 'Provide image name with extension after /api/, you can specify width and height',
    });
};

export default usage;

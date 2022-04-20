import { Router } from 'express';
import { imageExist, imageExtension } from '../middleware/image';
import checkWidthAndHeight from '../validators/urlParameter';
import getImage from '../controllers/imageProvider';
import usage from '../controllers/usage';

const router = Router();

router.use('/:imagename', [imageExtension, imageExist, checkWidthAndHeight]);

router.get('/', usage);
router.get('/:imagename', getImage);

export default router;

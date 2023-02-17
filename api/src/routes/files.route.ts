import { NextFunction, Request, Response, Router } from 'express';

import { uploadFileHelper, readFileHelper } from '../helpers/files.helper';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  return readFileHelper('csvfFileExample.csv', res);
});

router.post('/upload', uploadFileHelper.single('csvfile'), (req: Request, res: Response) => {
  res.status(200).json({ message: 'file uploaded successfully' });
});

export default router;
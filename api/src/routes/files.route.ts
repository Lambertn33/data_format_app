import { NextFunction, Request, Response, Router } from 'express';

import { readFile } from '../controllers/files.controller';

import filesConstants from '../constants/files.constants';

const router: Router = Router();

router.get('/read-csv', readFile(filesConstants.csvFileName));

router.get('/read-prn', readFile(filesConstants.prnFileName));

export default router;
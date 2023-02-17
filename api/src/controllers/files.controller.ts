import { Request, Response } from 'express';

import {  readFileHelper } from '../helpers/files.helper';

export const readFile = (fileName: string) => {
  return (_: Request, res: Response) => {
    return readFileHelper(fileName, res);
  }
}

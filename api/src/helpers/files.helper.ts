import { Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import csv from 'csv-parser';

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    fs.mkdir('./uploads/', (err) => {
      cb(null, './uploads/');
    });
  },
  filename: (req, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, file.originalname);
  }
});

export const readFileHelper = (filename: any, res: Response) => {
  const results: any = [];
  fs.createReadStream(`uploads/${filename}`)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.send(results);
    });
}

export const uploadFileHelper: multer.Multer = multer({ storage });

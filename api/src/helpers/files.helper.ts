import { Response } from 'express';
import fs from 'fs';
import csv from 'csv-parser';


export const readFileHelper = (filename: any, res: Response) => {
  const results: any = [];
  fs.createReadStream(`files/${filename}`)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.send(results);
    });
}


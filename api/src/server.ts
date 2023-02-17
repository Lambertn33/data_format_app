import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const main = () => {
  const app: Express = express();
  const allowedOrigins = ['*'];

  const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: "GET,HEAD,POST,READ",
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(options));

  

  app.listen(5000, () => {
    console.log('server listen on port 5000');
  });
}

main();
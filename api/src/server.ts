import express, { Express, NextFunction , Request, Response} from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const main = () => {
  const app: Express = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((_: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Contrl-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  app.use('/api/', routes.mainRoutes);
  app.use('/api/files', routes.filesRoutes);

  app.listen(5000, () => {
    console.log('server listen on port 5000');
  });
}

main();
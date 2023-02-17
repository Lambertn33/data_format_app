import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'initial setup' });
});

export default router;
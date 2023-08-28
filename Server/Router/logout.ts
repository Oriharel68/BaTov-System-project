import { Request, Response, Router } from 'express';

const express = require('express');
const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  return res.sendStatus(200);
});

export default router;

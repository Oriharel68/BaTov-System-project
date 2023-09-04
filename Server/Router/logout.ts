import { Request, Response, Router } from 'express';

const express = require('express');
const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  return res.sendStatus(200);

  //if he completed the auth he can LogOut
});

export default router;

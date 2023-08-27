import { Request, Response, NextFunction } from 'express';

import jwt = require('jsonwebtoken');
require('dotenv').config();

const Verify = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies['accessToken'];
  jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET || '',
    async (err, paylod) => {
      if (!err) return next();
      else return res.sendStatus(401);
    }
  );
};

export default Verify;

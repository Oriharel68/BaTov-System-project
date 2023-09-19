import { Request, Response, NextFunction } from 'express';

import jwt = require('jsonwebtoken');
require('dotenv').config();

const Verify = async (req: Request & {uid:string}, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization.split(' ')[1] || null;
  if(accessToken){
  jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET || '',
    async (err, paylod) => {
      
      if (!err) {
        req.uid = paylod as string;
        return next();
      }

      else return res.sendStatus(401);
    }
  );
  }
  else{
    return res.sendStatus(401);
  }
};

export default Verify;

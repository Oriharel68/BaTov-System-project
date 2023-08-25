

import {getAuth} from 'firebase-admin/auth'
import { Request, Response,NextFunction } from "express";


const Verify = async (req:Request,res:Response,next:NextFunction) =>{
    const IdToken = req.cookies?.IdToken;
    if(!IdToken){
        return res.status(401).send('empty');
    }
    
    const Auth = getAuth();
    Auth.verifyIdToken(IdToken).then((decode)=>{
        return next();
    }).catch((err)=>{
        return res.status(401).send();
    })
    
    
}


export default Verify;


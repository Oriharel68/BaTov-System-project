import { Request,Response,Router} from 'express';
import {getAuth} from 'firebase-admin/auth'

const express = require('express');
const router:Router = express.Router();


router.post('/',async(req:Request,res:Response)=>{
    const Auth = getAuth();
    const IdToken = req.body?.IdToken;
     Auth.verifyIdToken(IdToken).then((decode)=>{
        res.cookie('IdToken',IdToken,{maxAge:60*60000,httpOnly:true});
        res.status(200).send('cookie set');
    }).catch((err)=>{
        res.status(401).json({err});
    })
    
})



export default router;

import { Request,Response,Router} from 'express';




const express = require('express');
const router:Router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/',async(req:Request,res:Response)=>{
    const uid = req.body?.uid;
    if(!uid)return res.status(401).send();
    const token = jwt.sign(uid,process.env.ACCESS_TOKEN_SECRET || '');
    res.cookie('accessToken',token,{httpOnly:true ,sameSite:'none',secure:true});
    res.sendStatus(200);
})



export default router;
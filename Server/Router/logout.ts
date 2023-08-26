import { Request,Response,Router} from 'express';



const express = require('express');
const router:Router = express.Router();



router.post('/',async(req:Request,res:Response)=>{
    const accessToken = req.cookies['accessToken'];
    if(!accessToken)return res.sendStatus(400);
    res.clearCookie('accessToken',{httpOnly:true,sameSite:'none',secure:true});
    return res.sendStatus(200);
})

export default router;
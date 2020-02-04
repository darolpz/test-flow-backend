import { Router, Request, Response } from 'express';
import express from 'express';
import { getClientIp } from 'request-ip';
import publicIp from 'public-ip';
const routes = Router();


routes.route('/').get(async (req: Request, res: Response) => {
    const ip = getClientIp(req);
    console.log(await publicIp.v4());
    res.json({
        status: 200,
        mesage: 'ok',
    })
});


export default routes;




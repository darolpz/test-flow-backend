import { Router, Request, Response } from 'express';
const routes = Router();


routes.route('/').get(async (req: Request, res: Response) => {
    const ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress;
    console.log(ip);
    res.json({
        status: 200,
        mesage: 'ok',
    })
});


export default routes;




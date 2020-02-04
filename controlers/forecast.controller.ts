import { Request, Response } from 'express';
import Axios, { AxiosStatic } from 'axios';

export class ForecastController {

    public async test(req: Request, res: Response) {

        const ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        let url = 'http://ip-api.com/json/';

        try {

            const response = await Axios.get(url + '186.59.205.134');
            console.log(response);
            res.json({
                status: 200,
                mesage: 'ok',
                response: response.data
            });
        } catch (error) {
            console.log('error', error);
        }
    }
}


import { Request, Response } from 'express';
import { LocationService } from '../services/location';
import { WeatherService } from '../services/weather';
import { ForecastService } from '../services/forecast';
import Axios from 'axios';
export class ApiController {

    public async location(req: Request, res: Response) {

        const ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        try {
            const data = await LocationService.GetLocation(ip);
            res.json({
                status: 200,
                mesage: 'Location data got succesfully',
                data: data
            });
        } catch (error) {
            res.json({
                status: 400,
                mesage: 'Error trying to get location data',
                error: error
            });
        }
    }

    public async current(req: Request, res: Response) {
        const ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        let city = req.params.city;

        if (city === undefined || city === null) {
            const locationData = await LocationService.GetLocation(ip);
            city = locationData.city;
        }

        const weather = await WeatherService.GetWeather(city);
        try {
            res.json({
                status: 200,
                mesage: 'Weather data got succesfully',
                weather: weather
            });
        } catch (error) {
            res.json({
                status: 400,
                mesage: 'Error trying to get weather data',
                error: error
            });
        }
    }

    public async forecast(req: Request, res: Response) {
        const ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        let city = req.params.city;

        if (city === undefined || city === null) {
            const locationData = await LocationService.GetLocation(ip);
            city = locationData.city;
        }

        const weather = await ForecastService.GetForecast(city);
        try {
            res.json({
                status: 200,
                mesage: 'Weather data got succesfully',
                weather: weather
            });
        } catch (error) {
            res.json({
                status: 400,
                mesage: 'Error trying to get weather data',
                error: error
            });
        }
    }

}

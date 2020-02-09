import { Request, Response } from 'express';
import { LocationService } from '../services/location';
import { WeatherService } from '../services/weather';
import { ForecastService } from '../services/forecast';
export class ApiController {

    public async location(req: Request, res: Response) {
        try {
            const ip = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress;

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
        try {
            const ip = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress;
            const city = req.params.city;

            const weather = (city === undefined || city === null) ? await WeatherService.GetWeatherByIP(ip) : await WeatherService.GetWeather(city);
            res.json({
                status: 200,
                mesage: 'Weather data got succesfully',
                data: weather
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
        try {
            const ip = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress;
            const city = req.params.city;

            const forecast = (city === undefined || city === null) ? await ForecastService.GetForecastByIP(ip) : await ForecastService.GetForecast(city);

            res.json({
                status: 200,
                mesage: 'Forecast data got succesfully',
                data: forecast
            });
        } catch (error) {
            res.json({
                status: 400,
                mesage: 'Error trying to get forecast data',
                error: error
            });
        }
    }

}

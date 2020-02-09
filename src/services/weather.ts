import Axios from 'axios';
import { LocationService } from './location';

export class WeatherService {

    public static async GetWeather(city: string) {
        try {
            const key = '7accb50732241b2eade26a45d889feac';
            const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';
            const response = await Axios.get(urlWeather, {
                params: {
                    q: city,
                    appid: key
                }
            });
            return response.data;

        } catch (error) {
            throw error.response.data;
        }
    }

    public static async GetWeatherByIP(ip: any) {
        try {
            const key = '7accb50732241b2eade26a45d889feac';
            const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';
            const { lat, lon } = await LocationService.GetLocation(ip);
            const response = await Axios.get(urlWeather, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: key
                }
            });
            return response.data;

        } catch (error) {
            throw error.response.data;
        }
    }
}

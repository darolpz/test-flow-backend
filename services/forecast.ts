import Axios from 'axios';
import { LocationService } from './location';
export class ForecastService {

    public static async GetForecast(city: string) {
        try {
            const key = '7accb50732241b2eade26a45d889feac';
            const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
            const response = await Axios.get(urlForecast, {
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

    public static async GetForecastByIP(ip: any) {
        try {
            const key = '7accb50732241b2eade26a45d889feac';
            const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
            const { lat, lon } = await LocationService.GetLocation(ip);
            const response = await Axios.get(urlForecast, {
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

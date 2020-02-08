import Axios from 'axios';

export class WeatherService {

    public static async GetWeather(city: string) {
        const key = '7accb50732241b2eade26a45d889feac';
        const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';
        try {
            const response = await Axios.get(urlWeather, {
                params: {
                    q: city,
                    appid: key
                }
            });
            return response.data;

        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}

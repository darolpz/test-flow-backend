import Axios from 'axios';
export class ForecastService {

    public static async GetForecast(city: string) {
        const key = '7accb50732241b2eade26a45d889feac';
        const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
        try {
            const response = await Axios.get(urlForecast, {
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
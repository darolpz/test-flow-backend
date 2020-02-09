import Axios from 'axios';

export class LocationService {

    public static async GetLocation(ip: any): Promise<any> {
        try {
            const ipApiUrl = 'http://ip-api.com/json/';
            const response = await Axios.get(ipApiUrl + ip);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
}

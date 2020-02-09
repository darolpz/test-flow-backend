import { WeatherService } from '../src/services/weather';

test('Should return current weather data from Quilmes', async () => {
    const data = await WeatherService.GetWeather('Quilmes');
    expect(data.cod).toBe(200);
    expect(data.name).toBe('Quilmes');
});

test('Should fail trying to current weather data from a misspelled city name', async () => {
    try {
        await WeatherService.GetWeather('Lanus');
    } catch (error) {
        expect(error.cod).toBe('404');
        expect(error.message).toBe('city not found');

    }
});

test('Should return current weather data from Remedios Escalada', async () => {
    const data = await WeatherService.GetWeatherByIP('186.59.205.13');
    expect(data.cod).toBe(200);
    expect(data.name).toBe('Monte Castro');

});

test('Should fail and the error message should be nothing to geocode', async () => {
    try {
        await WeatherService.GetWeatherByIP('186.59.205.260');
    } catch (error) {
        expect(error.cod).toBe('400');
        expect(error.message).toBe('Nothing to geocode');
    }

});

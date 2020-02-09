import { ForecastService } from '../src/services/forecast';

test('Should return current weather data from Quilmes', async () => {
    const data = await ForecastService.GetForecast('Quilmes');
    expect(data.cod).toBe('200');
    expect(data.city.name).toBe('Quilmes');
});

test('Should fail trying to current weather data from a misspelled city name', async () => {
    try {
        await ForecastService.GetForecast('Lanus');
    } catch (error) {
        expect(error.cod).toBe('404');
        expect(error.message).toBe('city not found');

    }
});

test('Should return current weather data from Remedios Escalada', async () => {
    const data = await ForecastService.GetForecastByIP('186.59.205.13');
    expect(data.cod).toBe('200');

});

test('Should fail and the error message should be nothing to geocode', async () => {
    try {
        await ForecastService.GetForecastByIP('186.59.205.260');
    } catch (error) {
        expect(error.cod).toBe('400');
        expect(error.message).toBe('Nothing to geocode');
    }

});

import { LocationService } from '../src/services/location';

test('Should return location data', async () => {
    const data = await LocationService.GetLocation('186.59.205.13');
    expect(data.status).toBe('success');
    expect(data.country).toBe('Argentina');
});

test('Should fail trying to get location data', async () => {
    const data = await LocationService.GetLocation('186.59.205.260');
    expect(data.status).toBe('fail');
});

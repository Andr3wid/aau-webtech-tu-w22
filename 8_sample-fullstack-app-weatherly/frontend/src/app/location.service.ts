import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LocationFormInput } from './location-form/location-form.component';
import { GeoLocation } from './weather-card-container/weather-card-container.component';

const LOCATION_API_URL = 'http://localhost:3000/location';

const LAT_PLACEHOLDER = '[LAT]';
const LON_PLACEHOLDER = '[LON]';
const WEATHER_API_URL_TEMPLATE = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=ebc328bfc33fe1372a3a2fd7c4e11051&lat=${LAT_PLACEHOLDER}&lon=${LON_PLACEHOLDER}`;

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  private handleRequestError(error: HttpErrorResponse) {
    console.error('Request failed', error);

    return throwError(
      () => new Error('Network request failed; please try again later')
    );
  }

  public add(location: LocationFormInput) {
    return this.http
      .post(LOCATION_API_URL, location)
      .pipe(catchError(this.handleRequestError));
  }

  public getAllLocations() {
    return this.http
      .get<GeoLocation[]>(LOCATION_API_URL)
      .pipe(catchError(this.handleRequestError));
  }

  public deleteLocation(id: number) {
    return this.http
      .delete(`${LOCATION_API_URL}/${id}`)
      .pipe(catchError(this.handleRequestError));
  }

  public getWeatherData(location: GeoLocation) {
    return this.http
      .get(this.getWeatherUrl(location))
      .pipe(catchError(this.handleRequestError));
  }

  private getWeatherUrl(location: GeoLocation) {
    return WEATHER_API_URL_TEMPLATE.replace(
      LAT_PLACEHOLDER,
      location.latitude + ''
    ).replace(LON_PLACEHOLDER, location.longitude + '');
  }
}

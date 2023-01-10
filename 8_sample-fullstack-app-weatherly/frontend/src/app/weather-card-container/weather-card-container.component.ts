import { AfterViewInit, Component } from '@angular/core';
import { LocationService } from '../location.service';
import { WeatherCardData } from '../weather-card/weather-card.component';

export interface GeoLocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-weather-card-container',
  templateUrl: './weather-card-container.component.html',
  styleUrls: ['./weather-card-container.component.css'],
})
export class WeatherCardContainerComponent implements AfterViewInit {
  retrievedWeatherData: WeatherCardData[] = [];

  constructor(private locationService: LocationService) {}

  ngAfterViewInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getAllLocations().subscribe((locationResponse) => {
      console.log('Loaded locations', locationResponse);

      locationResponse.forEach((loc) => {
        this.locationService
          .getWeatherData(loc)
          .subscribe((weatherData: any) => {
            this.retrievedWeatherData.push({
              id: loc.id,
              name: loc.name,
              description: weatherData.weather[0].main,
              temperature: weatherData.main.temp,
            });
          });
      });
    });
  }
}

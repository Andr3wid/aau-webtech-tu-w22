import { Component, Input } from '@angular/core';
import { LocationService } from '../location.service';

export interface WeatherCardData {
  id: number;
  name: string;
  description: string;
  temperature: number;
}

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input() data: WeatherCardData = {
    id: -1,
    name: '---',
    description: '--',
    temperature: 0,
  };

  constructor(private locationService: LocationService) {}

  getBackgroundImageName() {
    return this.data.description.toLowerCase() + '.jpg';
  }

  onClickDelete(id: number) {
    console.log(`deleting location with id ${id}`);
    this.locationService.deleteLocation(id).subscribe((response) => {
      console.log(`locatino with id ${id} successfuly deleted`, response);
      window.location.reload();
    });
  }
}

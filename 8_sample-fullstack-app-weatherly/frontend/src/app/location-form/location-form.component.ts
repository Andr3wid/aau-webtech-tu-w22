import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

export interface LocationFormInput {
  name: string;
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {
  locationFormContent: LocationFormInput = {
    name: '',
    latitude: '',
    longitude: ''
  };

  constructor(private locationService: LocationService, private router: Router) {}

  onSave(e: Event) {
    e.preventDefault();
    console.log('Save has been clicked', this.locationFormContent);

    this.locationService.add(this.locationFormContent).subscribe(addResponse => {
      console.log('Successfully saved new location', addResponse);
      this.router.navigateByUrl('/home');
    });
  }
}

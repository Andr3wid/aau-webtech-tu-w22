import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LocationFormComponent } from './location-form/location-form.component';

import { RouterModule, Routes } from '@angular/router';
import { WeatherCardContainerComponent } from './weather-card-container/weather-card-container.component';
import { WeatherCardComponent } from './weather-card/weather-card.component'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'add', component: LocationFormComponent},
  { path: 'home', component: WeatherCardContainerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]; 

@NgModule({
  declarations: [AppComponent, LocationFormComponent, WeatherCardContainerComponent, WeatherCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

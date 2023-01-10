import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardContainerComponent } from './weather-card-container.component';

describe('WeatherCardContainerComponent', () => {
  let component: WeatherCardContainerComponent;
  let fixture: ComponentFixture<WeatherCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

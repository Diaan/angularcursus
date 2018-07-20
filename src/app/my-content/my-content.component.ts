import { Component, OnInit } from '@angular/core';
import { City } from '../shared/city.model';
import { CityService } from '../shared/city.service';
import { Observable } from 'rxjs';
import { _localeFactory } from '@angular/core/src/application_module';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.scss']
})
export class MyContentComponent implements OnInit {
  title: string;
  cities$: Observable<City[]>;
  currentCity: City;
  backgroundImage = 'url(https://c1.staticflickr.com/5/4426/36594618811_8ad2b52176_h.jpg)';

  constructor(private cityService: CityService) {
    // geen dingen die uitgevoerd moeten worden; deze on init doen ivm timing
  }

  get numberOfVisited() {
    return this.cityService.numberOfVisited();
  }

  // lifecycle hooks (verschillende hooks worden in verschillende volgorde
  // uitgevoerd: https://angular.io/guide/lifecycle-hooks#lifecycle-sequence )
  ngOnInit() {
    this.title = 'my travel app';
    this.cities$ = this.cityService.getCities();
  }

  addCity(city: HTMLInputElement, country: HTMLInputElement) {
    this.cityService.addCity(city.value, country.value);
    city.value = country.value = null;
  }

  removeCity(city: City) {
    this.cityService.removeCity(city);
  }

  viewDetails(city: City) {
    this.currentCity = city;
    this.currentCity.image = this.cityService.getPhoto(city);
  }

  setBackgroundImage(url) {
    this.backgroundImage = `url(${url})`;
  }
}

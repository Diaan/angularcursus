import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CityService {
  private cities: City[];
  private observable: Observable<any>;
  private apiUrl = 'https://api.unsplash.com/search/photos?client_id=dc8d54cc6cf21c7d5fa952d52d5c08899837a55b7df1660595dfe9de0ea5ef7b';

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    if (this.cities) {
      return of(this.cities);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get<City[]>('assets/cities.json').pipe(
        map(cities => {
          this.observable = null;
          const cityObjects = cities.map(city => new City(city.id, city.name, city.country, city.flag, city.visited));
          this.cities = cityObjects;
          return cityObjects;
        })
      );
      return this.observable;
    }
  }

  getCity(id) {
    // return this.cities.find(city => city.id === id);
    if (this.cities) {
      return of(this.cities);
    } else if (this.observable) {
      return this.observable;
    } else {
      console.log('else');

      this.observable = this.http.get<City[]>('assets/cities.json').pipe(
        map(cities => {
          console.log(cities);
          this.observable = null;
          const city = cities.find(c => c.id === id);
          return new City(city.id, city.name, city.country, city.flag, city.visited);
        })
      );
      return this.observable;
    }
  }

  frequentTraveller() {
    if (this.cities) {
      return this.cities.filter(c => c.visited).length > 4;
    }
    return false;
  }

  numberOfVisited() {
    if (this.cities) {
      return this.cities.filter(c => c.visited).length ;
    }
    return 0;
  }

  getPhoto(city): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}&page=1&per_page=1&query=${city.name}&orientation=landscape`).pipe(
      map(result => result.results[0].urls)
    );
  }

  addCity(city: string, country: string) {
    const maxId = Math.max.apply( null, this.cities.map((c) => c.id));
    this.cities.push(new City(maxId + 1, city, country));
  }

  removeCity(city: City) {
    this.cities.splice(this.cities.indexOf(city), 1);
  }
}

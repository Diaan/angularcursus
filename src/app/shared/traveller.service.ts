import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {
  Stream: Subject<City>;

  constructor() {
    this.Stream = new Subject<City>();
  }
}

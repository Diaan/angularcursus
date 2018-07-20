import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { City } from '../shared/city.model';
import { TravellerService } from '../shared/traveller.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  @Input() city: City;
  @Output() background: EventEmitter<any> = new EventEmitter<any>();

  constructor(private travellerService: TravellerService) { }

  ngOnInit() {
  }

  setBackground(image$) {
    image$.subscribe(res => this.background.emit(res.regular));
  }

  visit(city: City) {
    city.visit();
    this.travellerService.Stream.next(city);
  }
}

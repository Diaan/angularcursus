import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../shared/city.service';
import { City } from '../shared/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  id: number;
  city: City;

  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = +params.id;
      this.city = this.cityService.getCity(this.id);
    });
  }

}

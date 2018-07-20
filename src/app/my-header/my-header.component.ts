import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../shared/city.service';
import { City } from '../shared/city.model';
import { TravellerService } from '../shared/traveller.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})

@Input('name')

export class MyHeaderComponent implements OnInit {
  name: string;
  avatarColor: string;
  visitedPlaces: City[] = [];

  constructor(private cityService: CityService, private travellerService: TravellerService, private userService: UserService) { }

  get frequentTraveller() {
    return this.cityService.frequentTraveller();
  }

  ngOnInit() {
    this.name = this.userService.name;
    this.avatarColor = 'yellow';

    this.travellerService.Stream.subscribe(
      (city: City) => this.processCityVisit(city)
    );
  }

  setColor(color: string) {
    this.avatarColor = color;
  }

  processCityVisit(city) {
    this.visitedPlaces.push(city);
  }

}

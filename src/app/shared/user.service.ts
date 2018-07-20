import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = 'Diana';
  avatarColor = 'yellow';

  get userName() {
    return this.name;
  }

  constructor() { }
}

import { Observable } from 'rxjs';

export class City {
  image: Observable<string>;

  constructor(
    public id: number,
    public name: string,
    public country: string,
    public flag: string = '🏳',
    public visited: boolean = false
  ) {}

  visit() {
    this.visited = !this.visited;
  }
}

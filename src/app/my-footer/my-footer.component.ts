import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.scss']
})
export class MyFooterComponent implements OnInit {
  @Input() year: number;

  constructor() { }

  ngOnInit() {
  }

}

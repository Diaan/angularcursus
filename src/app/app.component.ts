import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  offlineWarning: string;

  @HostListener('window:offline')
  onOffline() {
    this.offlineWarning = 'we zijn offline';
  }

  @HostListener('window:online')
  onOnline() {
    this.offlineWarning = null;
  }
}

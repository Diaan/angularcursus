import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyContentComponent } from './my-content/my-content.component';
import { HeroComponent } from './hero/hero.component';
import { CityService } from './shared/city.service';
import { HttpClientModule } from '@angular/common/http';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyContentComponent,
    HeroComponent,
    CityDetailComponent,
    UserComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Routes} from '@angular/router';

import { MyContentComponent } from './my-content/my-content.component';
import { UserComponent } from './user/user.component';
import { CityComponent } from './city/city.component';

export const AppRoutes: Routes = [
  {path: '', component: MyContentComponent},
  {path: 'cities', component: MyContentComponent},
  {path: 'user', component: UserComponent},
  {path: 'city/:id', component: CityComponent}
];

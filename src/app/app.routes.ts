import { Routes } from '@angular/router';
// importing public page components
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
// importing private page components
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageLogoutComponent } from './page-logout/page-logout.component';

export const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  },
  {
    path: 'about',
    component: PageAboutComponent,
  },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'register',
    component: PageRegisterComponent,
  },
  {
    path: 'user-profile',
    component: PageProfileComponent,
  },
  {
    path: 'logout',
    component: PageLogoutComponent,
  },
];

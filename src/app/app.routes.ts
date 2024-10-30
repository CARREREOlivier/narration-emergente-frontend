import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SubscriptionComponent } from './login/subscription/subscription.component';
import { HomeComponent } from './home/home/home.component';
import { FolderViewComponent } from './folders/folder-view/folder-view.component';
import {AarViewComponent} from './folders/aar-view/aar-view.component';
import {LetsPlayViewComponent} from './folders/lets-play-view/lets-play-view.component';
import {FanFictionViewComponent} from './folders/fan-fiction-view/fan-fiction-view.component';
import {AarCreateComponent} from './folders/aar-create/aar-create.component';
import {AarDetailsComponent} from './folders/aar-details/aar-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SubscriptionComponent },
  { path: 'home', component: HomeComponent },

  { path: 'aar', component: AarViewComponent },
  { path: 'aar/create', component: AarCreateComponent },
  { path: 'aar/delete/ :slug', component: AarViewComponent },

  { path: 'lets-play', component: LetsPlayViewComponent },
  { path: 'fan-fiction', component: FanFictionViewComponent },

  { path: 'aar/:slug', component: AarDetailsComponent },

 // { path: 'lets-play/:slug', component: FolderViewComponent },
 // { path: 'fan-fiction/:slug', component: FolderViewComponent },

  { path: '**', redirectTo: '/home' },// wildcard
];

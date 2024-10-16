import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SubscriptionComponent } from './login/subscription/subscription.component';
import { HomeComponent } from './home/home/home.component';
import { FolderViewComponent } from './folders/folder-view/folder-view.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SubscriptionComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aar/:slug', component: FolderViewComponent },
  { path: 'lets-play/:slug', component: FolderViewComponent },
  { path: 'fan-fiction/:slug', component: FolderViewComponent },
  { path: '**', redirectTo: '/home' },
];

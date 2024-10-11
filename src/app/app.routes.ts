import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SubscriptionComponent } from './login/subscription/subscription.component';
import { HomeComponent } from './home/home/home.component';
import { FolderViewComponent } from './folders/folder-view/folder-view.component';  // Assurez-vous que le chemin est correct

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SubscriptionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'folders/:id', component: FolderViewComponent },  // Ajout de la route pour voir les détails d'un dossier
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }  // Gestion des routes inconnues
];

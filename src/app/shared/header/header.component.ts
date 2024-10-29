import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {NavigationComponent} from '../navigation/navigation.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    NgIf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username: string | null = null;
  userId: number | null = null;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.username = user.username;
    } else {
      this.username = 'Utilisateur non connecté';
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
  onLogin(): void {
    this.router.navigate(['/login']);
  }
  onLogout(): void {
    this.authService.logout().subscribe(
      (response) => {
        console.log('Déconnexion réussie');
        this.username = 'Utilisateur non connecté';
      },
      (error) => {
        console.error('Erreur lors de la déconnexion:', error);
      }
    );
  }
}

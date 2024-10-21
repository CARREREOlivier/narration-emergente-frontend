import { Component } from '@angular/core';
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
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) { }

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
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('user');  // Suppression des infos utilisateur
        this.router.navigate(['/home']); // redirection vers l'accueil
      },
      error: (err) => console.error('Erreur lors de la déconnexion:', err)
    });

  }
}

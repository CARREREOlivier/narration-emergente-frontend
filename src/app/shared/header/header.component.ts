import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
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
    this.authService.logout();
    console.log('Déconnexion');
    this.router.navigate(['/home']);  // Redirection vers l'accueil à la déconnexion'

  }
}

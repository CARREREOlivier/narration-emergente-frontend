import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  onLogin(): void {
    this.authService.login(this.username, this.password, this.rememberMe).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.router.navigate(['/home']); // Redirection après connexion
        } else {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        }
      },
      error: (err) => {
        console.error('Erreur lors de la connexion:', err);
        this.errorMessage = 'Erreur lors de la connexion. Veuillez réessayer.';
      }
    });
  }
}

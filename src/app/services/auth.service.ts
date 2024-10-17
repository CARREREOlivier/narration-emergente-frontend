import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/ne_backend/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  // Méthode de connexion
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  // Méthode d'inscription
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Méthode de déconnexion
  logout(): void {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null || sessionStorage.getItem('user') !== null;
  }
}

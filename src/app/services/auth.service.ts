import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/index.php';  // URL du back-end

  constructor(private http: HttpClient) {}

  // Méthode pour gérer la connexion
  login(username: string, password: string, rememberMe: boolean): Observable<any> {
    const body = { username, password, rememberMe };
    return this.http.post(`${this.apiUrl}/login`, body, { withCredentials: true });
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');  // On peut utiliser les cookies ou le localStorage
  }

  // Méthode d'inscription
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/index.php/auth';  // URL de l'API backend pour la connexion

  constructor(private http: HttpClient) {}

  // Méthode pour se connecter
  login(username: string, password: string, rememberMe: boolean): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password, rememberMe }).pipe(
      map(response => {
        this.setSession(response.token, rememberMe);
        return response;
      })
    );
  }

  // Enregistrer la session utilisateur
  private setSession(token: string, rememberMe: boolean): void {
    const expiration = rememberMe ? 'indefinite' : '24h';
    document.cookie = `token=${token}; max-age=${expiration}; path=/;`;
  }

  // Déconnexion de l'utilisateur
  logout(): void {
    document.cookie = 'token=; max-age=0; path=/;';  // Supprimer le cookie
    console.log('Déconnexion réussie');
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    const token = this.getCookie('token');
    return !!token;
  }

  // Récupérer un cookie par son nom
  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
}

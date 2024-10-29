import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import { Aar } from '../models/aar.model';

@Injectable({
  providedIn: 'root'
})
export class AarsService {
  private apiUrl = 'http://localhost/index.php/aar'; // URL du back-end

  constructor(private http: HttpClient) {}

  handleError(error: any) {
    // Implemente le logique pour l'erreur
    console.error('Une erreur s\'est produite:', error);
    return of(null); // ou returne une valeur par défaut comme Observable
  }
  getAllAars(): Observable<Aar[]> {
    return this.http.get<Aar[]>(this.apiUrl);
  }

  createAar(title: string, description: string, text: string): Observable<any> {
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Récupérer l'utilisateur depuis le localStorage
    const userId = user.id; // Récupérer l'ID de l'utilisateur

    const body = {
      title: title,
      description: description,
      text: text,
      user_id: userId // Ajouter l'ID de l'utilisateur à l'envoi
    };

    return this.http.post(`${this.apiUrl}/create`, body, {withCredentials:true}).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}

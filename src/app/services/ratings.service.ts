import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  private apiUrl = 'http://localhost/ne_backend/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  getAllRatingsByArticleId(articleId: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.apiUrl}/articles/${articleId}/ratings`);
  }

  getAllRatingsByFolderId(folderId: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.apiUrl}/folders/${folderId}/ratings`);
  }

  createRating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(`${this.apiUrl}/ratings`, rating);
  }

  deleteRating(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ratings/${id}`);
  }
}

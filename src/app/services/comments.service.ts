import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentary } from '../models/commentary.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'http://localhost/ne_backend/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  getAllCommentsByArticleId(articleId: number): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`${this.apiUrl}/articles/${articleId}/comments`);
  }

  getAllCommentsByFolderId(folderId: number): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`${this.apiUrl}/folders/${folderId}/comments`);
  }

  createCommentary(commentary: Commentary): Observable<Commentary> {
    return this.http.post<Commentary>(`${this.apiUrl}/comments`, commentary);
  }

  deleteCommentary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/comments/${id}`);
  }
}

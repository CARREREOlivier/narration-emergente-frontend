import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost/ne_backend/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/articles`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/articles/${id}`);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/articles`, article);
  }

  updateArticle(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/articles/${id}`, article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/articles/${id}`);
  }
}

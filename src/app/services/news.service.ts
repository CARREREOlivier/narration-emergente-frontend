import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost/ne_backend/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/news`);
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/news/${id}`);
  }

  createNews(news: News): Observable<News> {
    return this.http.post<News>(`${this.apiUrl}/news`, news);
  }

  updateNews(id: number, news: News): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/news/${id}`, news);
  }

  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/news/${id}`);
  }
}

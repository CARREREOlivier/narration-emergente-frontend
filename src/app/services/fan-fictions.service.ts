import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FanFiction } from '../models/fan-fiction.model';

@Injectable({
  providedIn: 'root'
})
export class FanFictionsService {
  private apiUrl = 'http://localhost/index.php/fan-fiction'; // URL du back-end

  constructor(private http: HttpClient) {}

  getAllFanFictions(): Observable<FanFiction[]> {
    return this.http.get<FanFiction[]>(this.apiUrl);
  }
}

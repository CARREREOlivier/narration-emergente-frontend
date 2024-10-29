import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LetsPlay } from '../models/lets-play.model';

@Injectable({
  providedIn: 'root'
})
export class LetsPlaysService {
  private apiUrl = 'http://localhost/index.php/lets-play'; // URL du back-end

  constructor(private http: HttpClient) {}

  getAllLetsPlays(): Observable<LetsPlay[]> {
    return this.http.get<LetsPlay[]>(this.apiUrl);
  }
}

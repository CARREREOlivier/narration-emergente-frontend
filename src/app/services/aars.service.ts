import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aar } from '../models/aar.model';

@Injectable({
  providedIn: 'root'
})
export class AarsService {
  private apiUrl = 'http://localhost/index.php/aar'; // URL du back-end

  constructor(private http: HttpClient) {}

  getAllAars(): Observable<Aar[]> {
    return this.http.get<Aar[]>(this.apiUrl);
  }
}

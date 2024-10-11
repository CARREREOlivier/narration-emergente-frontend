import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  private apiUrl = 'http://localhost/ne_backend/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.apiUrl}/folders`);
  }

  getFolderById(id: number): Observable<Folder> {
    return this.http.get<Folder>(`${this.apiUrl}/folders/${id}`);
  }

  createFolder(folder: Folder): Observable<Folder> {
    return this.http.post<Folder>(`${this.apiUrl}/folders`, folder);
  }

  updateFolder(id: number, folder: Folder): Observable<Folder> {
    return this.http.put<Folder>(`${this.apiUrl}/folders/${id}`, folder);
  }

  deleteFolder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/folders/${id}`);
  }
}

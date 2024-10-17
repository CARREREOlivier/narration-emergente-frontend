import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { Folder } from '../models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  private apiUrl = 'http://localhost/index.php';  // URL du backend

  constructor(private http: HttpClient) { }

  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.apiUrl}/folders`);
  }


  getFolderBySlugAndType(type: string, slug: string): Observable<Folder> {
    return this.http.get<Folder>(`${this.apiUrl}/${type}/${slug}`).pipe(
      catchError(error => {
        console.error('Error fetching folder:', error);
        return throwError(error);
      })
    );
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

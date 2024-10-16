import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoldersService } from '../../services/folders.service';
import { Folder } from '../../models/folder.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./folder-view.component.css']
})
export class FolderViewComponent implements OnInit {
  folder: Folder | null = null;
  errorMessage: string = '';
  folderSlug: string = '';
  folderType: string = '';

  constructor(private route: ActivatedRoute, private foldersService: FoldersService) {}

  ngOnInit(): void {
    this.folderSlug = this.route.snapshot.paramMap.get('slug') || '';
    this.folderType = this.route.snapshot.url[0].path;  // Récupérer le type (aar, lets-play, etc.)
    this.loadFolder(this.folderType, this.folderSlug);
  }

  loadFolder(type: string, slug: string): void {
    this.foldersService.getFolderBySlugAndType(type, slug).subscribe({
      next: (folder) => {
        this.folder = folder;
        console.log('Folder data:', folder);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement du dossier.';
        console.error('Error fetching folder:', err);
      }
    });
  }
}

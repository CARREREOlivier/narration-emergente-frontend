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

  constructor(private route: ActivatedRoute, private foldersService: FoldersService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadFolder(id);
    }
  }

  loadFolder(id: number): void {
    this.foldersService.getFolderById(id).subscribe({
      next: (folder) => {
        this.folder = folder;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement du dossier.';
      }
    });
  }
}

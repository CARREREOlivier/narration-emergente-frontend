import { Component, OnInit } from '@angular/core';
import { AarsService } from '../../services/aars.service';
import { Aar } from '../../models/aar.model';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-aar-view',
  templateUrl: './aar-view.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./aar-view.component.css']
})
export class AarViewComponent implements OnInit {
  aars: Aar[] = [];

  constructor(private aarsService: AarsService) {}

  ngOnInit(): void {
    this.aarsService.getAllAars().subscribe({
      next: (data) => {
        this.aars = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des AARs:', err);
      }
    });
  }
}

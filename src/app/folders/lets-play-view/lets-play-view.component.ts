import { Component, OnInit } from '@angular/core';
import { LetsPlaysService } from '../../services/lets-plays.service';
import { LetsPlay } from '../../models/lets-play.model';
import {DatePipe, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lets-play-view',
  templateUrl: './lets-play-view.component.html',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./lets-play-view.component.css']
})
export class LetsPlayViewComponent implements OnInit {
  letsPlays: LetsPlay[] = [];

  constructor(private letsPlaysService: LetsPlaysService) {}

  ngOnInit(): void {
    this.letsPlaysService.getAllLetsPlays().subscribe({
      next: (data) => {
        this.letsPlays = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des Let\'s Plays:', err);
      }
    });
  }
}

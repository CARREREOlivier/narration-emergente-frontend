import { Component, OnInit } from '@angular/core';
import { FanFictionsService } from '../services/fan-fictions.service';
import { FanFiction } from '../models/fan-fiction.model';

@Component({
  selector: 'app-fan-fiction-view',
  templateUrl: './fan-fiction-view.component.html',
  standalone: true,
  styleUrls: ['./fan-fiction-view.component.css']
})
export class FanFictionViewComponent implements OnInit {
  fanFictions: FanFiction[] = [];

  constructor(private fanFictionsService: FanFictionsService) {}

  ngOnInit(): void {
    this.fanFictionsService.getAllFanFictions().subscribe({
      next: (data) => {
        this.fanFictions = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des Fan Fictions:', err);
      }
    });
  }
}

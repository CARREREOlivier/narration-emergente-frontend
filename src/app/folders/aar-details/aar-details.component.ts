import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { AarsService } from '../../services/aars.service';
import { AarWithArticles } from '../../models/aarwitharticles';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-aar-details',
  templateUrl: './aar-details.component.html',
  standalone: true,
  styleUrls: ['./aar-details.component.css'],
  imports: [CommonModule, RouterLink]
})
export class AarDetailsComponent implements OnInit {
  aarDetails: AarWithArticles | null = null;

  constructor(
    private route: ActivatedRoute,
    private aarsService: AarsService
  ) {}

  ngOnInit(): void {
    let slug: string | null;
    slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.aarsService.getAarWithArticleBySlug(slug).subscribe(
        (data) => {
          this.aarDetails = data;
          console.log(this.aarDetails); // Pour vérifier les données chargées
        },
        (error) => {
          console.error("Erreur lors du chargement de l'AAR:", error);
        }
      );
    }
  }
}

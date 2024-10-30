import { Component, OnInit } from '@angular/core';
import { AarArticleService } from '../../services/aar-article.service';
import { ActivatedRoute } from '@angular/router';
import { AarArticle } from '../../models/AarArticle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aar-article-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aar-article-details.component.html',
  styleUrls: ['./aar-article-details.component.css']
})
export class AarArticleDetailsComponent implements OnInit {
  article: AarArticle | null = null;

  constructor(
    private route: ActivatedRoute,
    private aarArticleService: AarArticleService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.aarArticleService.getArticleBySlug(slug).subscribe(
        (data: AarArticle) => {
          this.article = data;
          console.log(this.article); // Pour vérifier les données chargées
        },
        (error) => {
          console.error("Erreur lors du chargement de l'article:", error);
        }
      );
    } else {
      console.warn("Aucun slug fourni dans l'URL");
    }
  }
}

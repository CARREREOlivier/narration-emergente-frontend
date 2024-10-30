import { Component, OnInit } from '@angular/core';
import { AarsService } from '../../services/aars.service';
import { Aar } from '../../models/aar.model';
import {DatePipe, NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ButtonCreateComponent} from '../../shared/button-create/button-create.component';

@Component({
  selector: 'app-aar-view',
  templateUrl: './aar-view.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    DatePipe,
    ButtonCreateComponent
  ],
  styleUrls: ['./aar-view.component.css']
})
export class AarViewComponent implements OnInit {
  aars: Aar[] = [];

  constructor(private aarsService: AarsService, private router: Router) {}

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

  onCreateNewAar(): void {
    // Redirige l'utilisateur vers la page de création de l'AAR
    this.router.navigate(['/aar/create'])
  }


  confirmDeleteAar(slug: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet AAR ? Cette action est irréversible.")) {
      this.deleteAar(slug);
    }
  }

  deleteAar(slug: string) {
    this.aarsService.deleteAar(slug).subscribe(
      response => {
        alert("AAR supprimé avec succès !");
        // Filtrer la liste des AAR pour supprimer l'élément sans recharger
        this.aars = this.aars.filter(aar => aar.slug !== slug);

      },
      error => {
        console.error("Erreur lors de la suppression de l'AAR :", error);
      }
    );
  }
}

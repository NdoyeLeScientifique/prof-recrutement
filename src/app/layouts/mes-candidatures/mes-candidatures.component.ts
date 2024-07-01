import { Component } from '@angular/core';
import { Candidature } from '../../candidature.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-candidatures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-candidatures.component.html',
  styleUrl: './mes-candidatures.component.css'
})
export class MesCandidaturesComponent {
  candidatures: Candidature[]=
  [
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
    {
      candidature_nom:'Enseignant anglais',
      candidature_etablissement:'Lycée Jean Moulin',
      candidature_date:'01/05/2024',
      candidature_statut:' En cours de traitement',
      candidature_detail:' Lien vers la description de l’établissement',
    },
  
  ]

  constructor(private router:Router){}

  onSelect(candidature:Candidature){
    this.router.navigate(['/ma-candidature'],{queryParams:{
      candidature:candidature.candidature_nom,
      etablissement:candidature.candidature_etablissement,
      date_de_candidature:candidature.candidature_date,
      statut:candidature.candidature_statut,
      detail:candidature.candidature_detail,
    }})
  }
}

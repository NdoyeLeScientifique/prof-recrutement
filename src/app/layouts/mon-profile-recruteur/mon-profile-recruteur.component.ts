import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-profile-recruteur',
  standalone: true,
  imports: [],
  templateUrl: './mon-profile-recruteur.component.html',
  styleUrl: './mon-profile-recruteur.component.css'
})
export class MonProfileRecruteurComponent {
  profile = {
    prenom: 'Youssoupha',
    nom: 'Seck',
    email: 'dangine@alias.com',
    etablissement: 'Lycée Baobab',
    adresse: 'Médina, Dakar',
    poste: 'Assistant DRH',
    description: `Fort d'une équipe pédagogique expérimentée et passionnée, notre établissement offre un environnement d'apprentissage stimulant et inclusif. Nous proposons un large éventail de programmes académiques et extra-curriculaires, visant à préparer nos étudiants à réussir dans le monde moderne.`
  };

  goBack() {
    // Implement the go back functionality here
    window.history.back();
  }
}

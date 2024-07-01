import { Component } from '@angular/core';
import { DetailsComponent } from "./details/details.component";
import { CommonModule } from '@angular/common';
import { Enseignant } from '../../enseignant.model';
import { Offre } from '../../offre.model';
import { randomInt } from 'crypto';
import { Router } from '@angular/router';
import { generateId } from '../../utiles/id-generator';

@Component({
    selector: 'app-mesoffres',
    standalone: true,
    templateUrl: './mesoffres.component.html',
    styleUrl: './mesoffres.component.css',
    imports: [DetailsComponent,CommonModule],
})
export class MesoffresComponent {
  talents: Enseignant[] = [
    {
      id_enseignant: generateId(),
      nom: 'Deme',
      prenom: 'Cheikh',
      statut: 'Enseignant Anglais-lycée',
      experience: 'Expérience 3 ans',
      age: 30,
      email: 'cheikh.deme@example.com',
      formation: 'DUT Mécanique',
      degree: 'Licence 3',
      competence: 'Communication',
      experienceYears: 3,
      universite: 'ESP'
    },
    {
      id_enseignant: generateId(),
      nom: 'Ndoye',
      prenom: 'Moussa',
      statut: 'Enseignant EPS-collège',
      experience: 'Expérience 5 ans',
      age: 35,
      email: 'moussa.ndoye@example.com',
      formation: 'DUT EPS',
      degree: 'Licence 3',
      competence: 'Pédagogie sportive',
      experienceYears: 5,
      universite: 'Université Cheikh Anta Diop'
    },
    {
      id_enseignant: generateId(),
      nom: 'Seck',
      prenom: 'Youssoupha',
      statut: 'Enseignant HG-lycée',
      experience: 'Expérience 1 an',
      age: 25,
      email: 'youssoupha.seck@example.com',
      formation: 'DUT Histoire-Géographie',
      degree: 'Licence 3',
      competence: 'Cartographie',
      experienceYears: 1,
      universite: 'Université Gaston Berger'
    },
    {
      id_enseignant: generateId(),
      nom: 'Sene',
      prenom: 'Tening',
      statut: 'Enseignant Français-lycée',
      experience: 'Expérience 3 ans',
      age: 28,
      email: 'tening.sene@example.com',
      formation: 'DUT Français',
      degree: 'Licence 3',
      competence: 'Littérature',
      experienceYears: 3,
      universite: 'Université de Dakar'
    },
    {
      id_enseignant: generateId(),
      nom: 'Doe',
      prenom: 'John',
      statut: 'Enseignant Mathématiques',
      experience: 'Expérience 4 ans',
      age: 32,
      email: 'john.doe@example.com',
      formation: 'DUT Mathématiques',
      degree: 'Licence 3',
      competence: 'Analyse mathématique',
      experienceYears: 4,
      universite: 'Université de Ziguinchor'
    },
    {
      id_enseignant: generateId(),
      nom: 'Smith',
      prenom: 'Jane',
      statut: 'Enseignant SVT',
      experience: 'Expérience 2 ans',
      age: 29,
      email: 'jane.smith@example.com',
      formation: 'DUT Sciences de la Vie et de la Terre',
      degree: 'Licence 3',
      competence: 'Géologie',
      experienceYears: 2,
      universite: 'Université de Thiès'
    },
    {
      id_enseignant: generateId(),
      nom: 'Mbaye',
      prenom: 'Awa',
      statut: 'Enseignant Informatique',
      experience: 'Expérience 4 ans',
      age: 31,
      email: 'awa.mbaye@example.com',
      formation: 'DUT Informatique',
      degree: 'Licence 3',
      competence: 'Programmation',
      experienceYears: 4,
      universite: 'Université Alioune Diop de Bambey'
    },
    {
      id_enseignant: generateId(),
      nom: 'Fall',
      prenom: 'Aminata',
      statut: 'Enseignant Chimie',
      experience: 'Expérience 6 ans',
      age: 34,
      email: 'aminata.fall@example.com',
      formation: 'DUT Chimie',
      degree: 'Licence 3',
      competence: 'Chimie organique',
      experienceYears: 6,
      universite: 'Université de Saint-Louis'
    },
    {
      id_enseignant: generateId(),
      nom: 'Diop',
      prenom: 'Ibrahima',
      statut: 'Enseignant Physique',
      experience: 'Expérience 7 ans',
      age: 37,
      email: 'ibrahima.diop@example.com',
      formation: 'DUT Physique',
      degree: 'Licence 3',
      competence: 'Physique quantique',
      experienceYears: 7,
      universite: 'Université de Kolda'
    },
    {
      id_enseignant: generateId(),
      nom: 'Camara',
      prenom: 'Fatou',
      statut: 'Enseignant Histoire',
      experience: 'Expérience 5 ans',
      age: 33,
      email: 'fatou.camara@example.com',
      formation: 'DUT Histoire',
      degree: 'Licence 3',
      competence: 'Histoire médiévale',
      experienceYears: 5,
      universite: 'Université de Bambey'
    },
  ]
    offres: Offre[]=[
      {   
        id_offre:"3",    
        offre: "professeur pc",
        niveau: "Collège",
        lieu: "Baye bouki",
        departement : "Baye leuk",
        region: "Kolda",
        date_limite: '',
        diplome_exige: "Licence 3",
        type_de_contrat: "CDI", 
      },
      {   
        id_offre:"3",    
        offre: "professeur pc",
        niveau: "Collège",
        lieu: "Baye bouki",
        departement : "Baye leuk",
        region: "Kolda",
        date_limite: '',
        diplome_exige: "Licence 3",
        type_de_contrat: "CDI", 
      },
     
     
     
    ]

    constructor (private router:Router){}
    onSelect(offre:Offre){
       this.router.navigate(['/details'],{queryParams:{offre:offre.offre,candidat_recu:3}
     })
    }
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Enseignant } from '../../enseignant.model';
import { generateId } from '../../utiles/id-generator';

@Component({
  selector: 'app-mon-profile',
  standalone: true,
  imports: [],
  templateUrl: './mon-profile.component.html',
  styleUrl: './mon-profile.component.css'
})
export class MonProfileComponent {
  profile:Enseignant=  {
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
  }
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}

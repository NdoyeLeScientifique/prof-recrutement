import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentProfileComponent } from './talent-profile/talent-profile.component';
import { Enseignant } from '../../enseignant.model';
import { Router } from '@angular/router';
import { TalentService } from './talent.service';
import { generateId } from '../../utiles/id-generator';

@Component({
  selector: 'app-find-talent',
  standalone:true,
  templateUrl: './find-talent.component.html',
  styleUrls: ['./find-talent.component.css'],
  imports: [CommonModule,TalentProfileComponent]
})
export class FindTalentComponent {
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
    {
      id_enseignant: generateId(),
      nom: 'Gueye',
      prenom: 'Aliou',
      statut: 'Enseignant Économie',
      experience: 'Expérience 8 ans',
      age: 38,
      email: 'aliou.gueye@example.com',
      formation: 'DUT Économie',
      degree: 'Licence 3',
      competence: 'Économie internationale',
      experienceYears: 8,
      universite: 'Université de Kaolack'
    },
    {
      id_enseignant: generateId(),
      nom: 'Sow',
      prenom: 'Mamadou',
      statut: 'Enseignant Géographie',
      experience: 'Expérience 3 ans',
      age: 30,
      email: 'mamadou.sow@example.com',
      formation: 'DUT Géographie',
      degree: 'Licence 3',
      competence: 'Géographie urbaine',
      experienceYears: 3,
      universite: 'Université de Louga'
    },
    {
      id_enseignant: generateId(),
      nom: 'Diallo',
      prenom: 'Saliou',
      statut: 'Enseignant Informatique',
      experience: 'Expérience 2 ans',
      age: 27,
      email: 'saliou.diallo@example.com',
      formation: 'DUT Informatique',
      degree: 'Licence 3',
      competence: 'Développement web',
      experienceYears: 2,
      universite: 'Université de Matam'
    },
    {
      id_enseignant: generateId(),
      nom: 'Ndour',
      prenom: 'Ndeye',
      statut: 'Enseignant Musique',
      experience: 'Expérience 4 ans',
      age: 29,
      email: 'ndeye.ndour@example.com',
      formation: 'DUT Musique',
      degree: 'Licence 3',
      competence: 'Théorie musicale',
      experienceYears: 4,
      universite: 'Conservatoire National de Musique'
    }
  ];


constructor(private router:Router,private talentService:TalentService){}
selectTalent?: Enseignant;

  onSelect(talent: Enseignant) {
    this.talentService.setSelectTalent(talent);
    this.router.navigate(['/profile',talent.email]) ;
  //  alert(this.selectTalent.name);

  }
}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-talent',
  templateUrl: './find-talent.component.html',
  styleUrls: ['./find-talent.component.css']
})
export class FindTalentComponent {
  talents = [
    { name: 'Cheikh Deme', position: 'Enseignant Anglais-lycée', experience: 3 },
    { name: 'Moussa Ndoye', position: 'Enseignant EPS-collège', experience: 5 },
    { name: 'Youssoupha Seck', position: 'Enseignant HG-lycée', experience: 1 },
    { name: 'Tening Sene', position: 'Enseignant Français-lycée', experience: 3 },
    { name: 'John Doe', position: 'Enseignant Mathématiques', experience: 4 },
    { name: 'Jane Smith', position: 'Enseignant SVT', experience: 2 }
  ];
   
}

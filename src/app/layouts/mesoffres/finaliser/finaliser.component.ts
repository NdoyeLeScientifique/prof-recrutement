import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-finaliser',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './finaliser.component.html',
  styleUrl: './finaliser.component.css'
})
export class FinaliserComponent {
  email: string = '';
  startDate:String='' ;
  salaire:String="";
  contractType:String='';
  message:String='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }


  submitForm() {
    // Valider les données du formulaire
    if (this.validateForm()) {
      // Simuler l'envoi des données (par exemple, vers un backend)
      const formData = {
        email: this.email,
        startDate: this.startDate,
        salary: this.salaire,
        contractType: this.contractType,
        message: this.message
      };

      console.log('Formulaire soumis:', formData);
      alert('Formulaire soumis avec succès.');

      // Réinitialiser le formulaire
      this.resetForm();
    }
  }

  validateForm(): boolean {
    // Valider les champs obligatoires
    if (!this.email || !this.startDate || !this.salaire || !this.contractType) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return false;
    }
    return true;
  }

  resetForm() {
    // Réinitialiser les champs du formulaire
    this.startDate = '';
    this.salaire = '';
    this.contractType = '';
    this.message = '';
  }
}

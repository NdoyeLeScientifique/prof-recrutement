import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindOffreComponent } from '../find-offre.component';
import { Offre } from '../../../offre.model';

@Component({
  selector: 'app-offre-description',
  standalone: true,
  imports: [],
  templateUrl: './offre-description.component.html',
  styleUrl: './offre-description.component.css'
})
export class OffreDescriptionComponent {
  offre:Offre= {   
    id_offre:"",    
    offre: "",
    niveau: "",
    lieu: "",
    departement : "",
    region: "",
    date_limite: '',
    diplome_exige: "",
    type_de_contrat: "", 
  }
constructor(private route:ActivatedRoute){}

ngOnInit(){
  this.route.queryParams.subscribe(param=>{
    this.offre= {   
      id_offre:param['id_offre'],    
      offre: param['offre'],
      niveau: param['niveau'],
      lieu: param['lieu'],
      departement : param['departement'],
      region: param['region'],
      date_limite: param['date_limite'],
      diplome_exige: param['diplome_exige'],
      type_de_contrat: param['type_de_contrat'], 
    };
  })
}



}

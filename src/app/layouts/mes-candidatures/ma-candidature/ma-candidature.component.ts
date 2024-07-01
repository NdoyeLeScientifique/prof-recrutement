import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidature } from '../../../candidature.model';

@Component({
  selector: 'app-ma-candidature',
  standalone: true,
  imports: [],
  templateUrl: './ma-candidature.component.html',
  styleUrl: './ma-candidature.component.css'
})
export class MaCandidatureComponent {
  candidature:Candidature={
    candidature_nom:'',
    candidature_etablissement:'',
    candidature_date:'',
    candidature_statut:'',
    candidature_detail:'',
  }
  constructor(private router:ActivatedRoute){}

  ngOnInit(){
    this.router.queryParams.subscribe(param=>{
      this.candidature={
      candidature_nom:param['candidature'],
      candidature_etablissement:param['etablissement'],
      candidature_date:param['date'],
      candidature_statut:param['statut'],
      candidature_detail:param['detail'] 
    }
    })
  }
}

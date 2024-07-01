import { Component, Input, OnInit } from '@angular/core';
import { FindTalentComponent } from '../find-talent.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TalentService } from '../talent.service';
import { Enseignant } from '../../../enseignant.model';

@Component({
  selector: 'app-talent-profile',
  standalone: true,
  imports: [FindTalentComponent,CommonModule],
  templateUrl: './talent-profile.component.html',
  styleUrl: './talent-profile.component.css'
})

export class TalentProfileComponent implements OnInit {
  @Input() enseignant?:Enseignant;
  constructor(private route: ActivatedRoute,private talentService:TalentService){}
  ngOnInit(): void {
      const email= this.route.snapshot.paramMap.get('email');
      if(email){
        this.enseignant=this.talentService.getSelectTalent();
      }
  }
  
}

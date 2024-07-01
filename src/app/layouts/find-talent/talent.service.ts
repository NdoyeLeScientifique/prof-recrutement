import { Injectable } from '@angular/core';
import { Enseignant } from '../../enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  private selectTalent?: Enseignant;

  setSelectTalent(talent:Enseignant){
    this.selectTalent=talent;
  }
  getSelectTalent():Enseignant|undefined{
    return this.selectTalent
  }

}

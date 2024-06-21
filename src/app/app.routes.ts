import { Routes } from '@angular/router';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { RProfilesComponent } from './authentification/r-profiles/r-profiles.component';
import { PwOublieComponent } from './authentification/pw-oublie/pw-oublie.component';
import { FindTalentComponent } from './layouts/find-talent/find-talent.component';

export const routes: Routes = [
    {
        path: "vit",
        component: VitrineComponent
      },
    {
        path: "inscript",
        component: InscriptionComponent
      },
      {
        path: "connect",
        component: ConnexionComponent
      },
      {
        path: "",
        component:FindTalentComponent
      },
      {
        path: "mdp-oublier",
        component:PwOublieComponent
      },
      {
        path: "r-profile",
        component: RProfilesComponent
      }
     
];

import { Routes } from '@angular/router';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { RProfilesComponent } from './authentification/r-profiles/r-profiles.component';
import { PwOublieComponent } from './authentification/pw-oublie/pw-oublie.component';
import { FindTalentComponent } from './layouts/find-talent/find-talent.component';
import { TalentProfileComponent } from './layouts/find-talent/talent-profile/talent-profile.component';
import { MesoffresComponent } from './layouts/mesoffres/mesoffres.component';
import { FinaliserComponent } from './layouts/mesoffres/finaliser/finaliser.component';
import { FindOffreComponent } from './layouts/find-offre/find-offre.component';
import { OffreDescriptionComponent } from './layouts/find-offre/offre-description/offre-description.component';
import { DetailsComponent } from './layouts/mesoffres/details/details.component';
import { AproposComponent } from './apropos/apropos.component';
import { MesCandidaturesComponent } from './layouts/mes-candidatures/mes-candidatures.component';
import { MaCandidatureComponent } from './layouts/mes-candidatures/ma-candidature/ma-candidature.component';
import { MonProfileComponent } from './layouts/mon-profile/mon-profile.component';
import { PublierOffreComponent } from './layouts/mesoffres/publier-offre/publier-offre.component';
import { ProfileComplementaireComponent } from './authentification/profile-complementaire/profile-complementaire.component';
import { MonProfileRecruteurComponent } from './layouts/mon-profile-recruteur/mon-profile-recruteur.component';

export const routes: Routes = [
    {
        path: "",
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
        path:"profile-complementaire",
        component:ProfileComplementaireComponent
      },
      {
        path: "trouver-talents",
        component:FindTalentComponent
      },
      {
        path:"profile/:email",
        component:TalentProfileComponent
      },
      {
        path: "mdp-oublier",
        component:PwOublieComponent
      },
      {
        path: "r-profile",
        component: RProfilesComponent
      },
      {
        path:'mon-profile-recruteur',
        component:MonProfileRecruteurComponent
      },
      {
        path:"mesoffreapp-mesoffres",
        component : MesoffresComponent
      },
      {
        path: "finaliser",
        component:FinaliserComponent
      },
      {
        path:"mesoffres",
        component: MesoffresComponent
      },
      {
        path:"details",
        component:DetailsComponent
      },
      {
        path:"offre-description",
        component:OffreDescriptionComponent
      },
      {
        path:"trouver-offre",
        component:FindOffreComponent
      },
      {
        path:"mes-candidatures",
        component:MesCandidaturesComponent
      },
      {
        path:'ma-candidature',
        component:MaCandidatureComponent
      },
      {
        path:'mon-prodile',
        component:MonProfileComponent
      },
      {
        path:"publier-offre",
        component:PublierOffreComponent
      },
      {
        path:"apropos",
        component:AproposComponent
      },
];

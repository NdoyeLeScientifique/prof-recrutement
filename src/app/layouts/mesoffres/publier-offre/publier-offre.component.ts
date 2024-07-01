import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-publier-offre',
  standalone: true,
  imports: [],
  templateUrl: './publier-offre.component.html',
  styleUrl: './publier-offre.component.css'
})
export class PublierOffreComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}

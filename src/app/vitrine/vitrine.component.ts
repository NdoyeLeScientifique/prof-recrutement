import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  constructor(private modalService: ModalService) {}

  openAboutModal() {
    this.modalService.openAboutModal();
  }
}

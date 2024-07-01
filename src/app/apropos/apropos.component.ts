import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

  @Input() isVisible: boolean = false;

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.closeAboutModal();
  }
}

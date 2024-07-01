import { Component } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private modalService: ModalService) {}


  openAboutModal() {
    this.modalService.openAboutModal();
  }
}

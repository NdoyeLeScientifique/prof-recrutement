import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { HeaderComponent } from './layouts/header/header.component';
import { VitrineComponent } from "./vitrine/vitrine.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { Talen } from './layouts/find-talent/talent.model';
import { FooterComponent } from "./layouts/footer/footer.component";
import { AproposComponent } from "./apropos/apropos.component";
import { ModalService } from './modal.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, HeaderComponent, VitrineComponent, AuthentificationComponent, ContactsComponent, FooterComponent, AproposComponent]
})



export class AppComponent implements OnInit {
  title = 'prof-recru';

  showAboutModal: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.aboutModalVisible$.subscribe(
      (isVisible) => this.showAboutModal = isVisible
    );
  }
}



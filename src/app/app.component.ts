import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { HeaderComponent } from './layouts/header/header.component';
import { VitrineComponent } from "./vitrine/vitrine.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent,HeaderComponent,VitrineComponent, AuthentificationComponent]
})

export class AppComponent {
  title = 'prof-recru';
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs = [
    { id: 1, title: 'Enseignant Math', level: 'Collège' },
    { id: 2, title: 'Enseignant Français', level: 'Lycée' },
    { id: 3, title: 'Enseignant Physique', level: 'Lycée' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

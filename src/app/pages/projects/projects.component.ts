import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/interfaces';
import file from '../../../assets/data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = file.projects;

  constructor() {}

  ngOnInit(): void {}
}

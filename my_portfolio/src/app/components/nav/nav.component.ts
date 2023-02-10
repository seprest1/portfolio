import { Component, OnInit } from '@angular/core';
import { Project } from '../../Project';
import { projects } from '../../projects';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit{
  project: Project[] = projects;

  ngOnInit(): void {};
  
  toggleProject(projectName){
    console.log(projectName);
  }

  displayElement = true;
}

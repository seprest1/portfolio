import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  @Input() text: string;
  @Output() projectClick = new EventEmitter();

  ngOnInit(): void {};

  onClick() {
    this.projectClick.emit();
  }
}

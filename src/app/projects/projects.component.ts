import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { YeggsProjects, GamesProjects, ToolsProjects } from './projects-list';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CarouselComponent, NgFor, NgClass ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  categories = [ "YEGGS", "GAMES", "TOOLS" ]
  projectsList = [ YeggsProjects, GamesProjects, ToolsProjects]
  currentList = 0

  setProjectList(index: number) {
    this.currentList = index;
  }
}

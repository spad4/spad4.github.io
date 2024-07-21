import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import YeggsProjects from './projects-list';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CarouselComponent, NgFor, NgClass ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectsList = [ YeggsProjects ]

}

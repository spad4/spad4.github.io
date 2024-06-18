import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CarouselComponent ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  public towerDefenseSlides = [
    {src: "../../assets/images/projects/tower_defense/tower_defense.png"},
    {src: "../../assets/images/projects/tower_defense/castle_map.png"},
    {src: "../../assets/images/projects/tower_defense/space_map.png"},
    {src: "../../assets/images/projects/tower_defense/taj_map.png"}
  ]

  public horseRidersSlides = [
    {src: "../../assets/images/projects/horse_riders/horse_riders.png"},
    {src: "../../assets/images/projects/horse_riders/start.png"},
    {src: "../../assets/images/projects/horse_riders/racing.png"},
    {src: "../../assets/images/projects/horse_riders/distant_image.jpg"}
  ]

  public phoenixFightersSlides = [
    {src: "../../assets/images/projects/phoenix_fighters/phoenix_fighters.png"},
    {src: "../../assets/images/projects/phoenix_fighters/arena.png"},
    {src: "../../assets/images/projects/phoenix_fighters/powerup.png"},
    {src: "../../assets/images/projects/phoenix_fighters/credits.png"}
  ]

  public moreFoodSlides = [
    {src: "../../assets/images/projects/more_food/more_food.jpg"},
    {src: "../../assets/images/projects/more_food/pizza.jpg"},
    {src: "../../assets/images/projects/more_food/tomatoes.jpg"},
    {src: "../../assets/images/projects/more_food/food.jpg"}
  ]
  
}

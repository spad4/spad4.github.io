import { Component, Input} from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  @Input() slides: any;
  currentIndex = 0;
  
  previous() {
    this.currentIndex = this.currentIndex == 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = this.currentIndex == this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyperService } from '../typer.service';
import { finalize, map} from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    titles = [ "software engineer", "game developer", "problem solver", "team leader" ]
    private typewriterService = inject(TyperService);
    animateCursor = false;

    title$ = this.typewriterService.getTypingEffect(this.titles).pipe(
      map((text) => text,
      finalize(() => {
        this.animateCursor = true;
        console.log("AAAA")
      }))
    )

}


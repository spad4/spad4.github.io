import { NgIf, NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {}

  title = 'website';

  prevUrl = "";

  navAnimation = false;
  navDisabled = true;

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)

        this.navAnimation = this.router.url === '/';
        
        if (this.router.url !== '/') {
          this.navDisabled = false;
        }
    });

    
  }
}
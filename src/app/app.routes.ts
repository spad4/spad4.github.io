import { Routes } from '@angular/router';

import { SocialsComponent } from './socials/socials.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './aboutme/aboutme.component';



export const routes: Routes = [
    { path: 'socials', component: SocialsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about-me', component: AboutMeComponent }
];

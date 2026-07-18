import { Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { MobiledungeonComponent } from './mobiledungeon/mobiledungeon.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'mobile-dungeon', component: MobiledungeonComponent }
    
];

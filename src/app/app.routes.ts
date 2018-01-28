import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsideComponent } from './inside/inside.component';



export const routes: Routes =[
    {path:'home',component:HomeComponent},
    {path:'app-about',component:AboutComponent},
    {path:'insidehome',component:InsideComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:HomeComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
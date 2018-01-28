import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { InsideComponent } from './inside/inside.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    AboutComponent,
    InsideComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

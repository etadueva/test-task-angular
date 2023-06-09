import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLikeComponent } from './components/button-like/button-like.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component'

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    ButtonLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

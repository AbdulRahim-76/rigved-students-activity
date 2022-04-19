import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PopularComponent } from './popular/popular.component';
import { SuccessComponent } from './success/success.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AotComponent } from './anime/aot/aot.component';
import { BleachComponent } from './anime/bleach/bleach.component';
import { DeathNoteComponent } from './anime/death-note/death-note.component';
import { DemonSlayerComponent } from './anime/demon-slayer/demon-slayer.component';
import { EpisodeOneComponent } from './episodes/episode-one/episode-one.component';
import { EpisodeTwoComponent } from './episodes/episode-two/episode-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    PopularComponent,
    SuccessComponent,
    AnimeListComponent,
    AotComponent,
    BleachComponent,
    DeathNoteComponent,
    DemonSlayerComponent,
    EpisodeOneComponent,
    EpisodeTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

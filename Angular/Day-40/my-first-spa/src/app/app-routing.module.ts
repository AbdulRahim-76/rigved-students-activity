import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SuccessComponent } from './success/success.component';
import { PopularComponent } from './popular/popular.component';
import { AotComponent } from './anime/aot/aot.component';
import { BleachComponent } from './anime/bleach/bleach.component';
import { DeathNoteComponent } from './anime/death-note/death-note.component';
import { DemonSlayerComponent } from './anime/demon-slayer/demon-slayer.component';
import { AuthenticGuard } from './authentic.guard';
import { EpisodeOneComponent } from './episodes/episode-one/episode-one.component';
import { EpisodeTwoComponent } from './episodes/episode-two/episode-two.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
  ,
  {
    path: 'success/:name/:pass', component: SuccessComponent, canActivate: [AuthenticGuard], children: [

      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'anime-list', component: AnimeListComponent, children: [

          {
            path: 'aot', component: AotComponent, children: [
              { path: 'episode-one', component: EpisodeOneComponent },
              { path: 'episode-two', component: EpisodeTwoComponent }]
          },
          {
            path: 'bleach', component: BleachComponent, children: [
              { path: 'episode-one', component: EpisodeOneComponent },
              { path: 'episode-two', component: EpisodeTwoComponent }]
          },
          {
            path: 'death-note', component: DeathNoteComponent, children: [
              { path: 'episode-one', component: EpisodeOneComponent },
              { path: 'episode-two', component: EpisodeTwoComponent }]
          },
          {
            path: 'demon-slayer', component: DemonSlayerComponent, children: [
              { path: 'episode-one', component: EpisodeOneComponent },
              { path: 'episode-two', component: EpisodeTwoComponent }]
          }

        ]
      },
      { path: 'movies', component: MoviesComponent },
      { path: 'popular', component: PopularComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/results/movies/movies.component';
import {MovieComponent} from './views/results/movie/movie.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'results'},
  {path: 'results', component: MoviesComponent},
  {path: 'details/:mid', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

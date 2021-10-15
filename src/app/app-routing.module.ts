import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { PersonComponent } from './person/person.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"movies", component:MoviesComponent},
  {path:"series", component:SeriesComponent},
  {path:"persons", component:PersonComponent},
  {path:"Mdetails/:id", component:MovieDetailsComponent},
  {path:"Sdetails/:id", component:SeriesDetailsComponent},
  {path:"Pdetails/:id", component:PersonDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

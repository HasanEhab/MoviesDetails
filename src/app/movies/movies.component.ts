import { Component, OnInit } from '@angular/core';
import {MoviesApiService} from '../movies-api.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies:any[] =[] ;
  
  imageFirstPart ="https://image.tmdb.org/t/p/w500";

 constructor(_MoviesApiService:MoviesApiService) {

   _MoviesApiService.getTrendingMovie().subscribe((data)=>{

     this.trendingMovies = data.results ;

   },(error)=>{})

  }

 ngOnInit(): void {
 }

}

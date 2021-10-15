import { Component, OnInit } from '@angular/core';
import{MoviesApiService} from '../movies-api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   trendingMovies:any[] =[] ;
   
   imageFirstPart ="https://image.tmdb.org/t/p/w500";

  constructor(_MoviesApiService:MoviesApiService) {

    _MoviesApiService.getTrendingMovie().subscribe((data)=>{

      this.trendingMovies = data.results ;

    },(error)=>{})

   }

   public notMediumLayout = true;
   public winWidth:any;

  ngOnInit(): void {

    this.winWidth = window.innerWidth;

      if(this.winWidth < 991){
        this.notMediumLayout =false ;
      }
      else{
        this.notMediumLayout =true ;
      }
    }

}

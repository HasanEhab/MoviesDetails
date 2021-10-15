import { Component, OnInit } from '@angular/core';
import{MoviesApiService} from '../movies-api.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  trendingseries:any[] =[] ;
  
  imageFirstPart ="https://image.tmdb.org/t/p/w500";

 constructor(_seriesApiService:MoviesApiService) {

   _seriesApiService.getTrendingSeries().subscribe((data)=>{

     this.trendingseries = data.results ;

   },(error)=>{})

  }

 ngOnInit(): void {
 }

}
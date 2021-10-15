import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {

  seriesDetails:any;
  id:any;
  isLoading:boolean = false ;
  
  imageFirstPart ="https://image.tmdb.org/t/p/w500";

 constructor(_MoviesAdetails:MoviesApiService,public _ActivatedRoute:ActivatedRoute) {

  this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesAdetails.getSeriesDetails(this.id).subscribe((data)=>{

      this.seriesDetails = data ;
      this.isLoading = true;
      console.log(this.seriesDetails);

    },(error)=>{})


 }
  ngOnInit(): void {
  }

}

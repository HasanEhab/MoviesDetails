import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  MoviesDetails:any;
  id:any;
  isLoading:boolean = false ;
  
  imageFirstPart ="https://image.tmdb.org/t/p/w500";

 constructor(_MoviesAdetails:MoviesApiService,public _ActivatedRoute:ActivatedRoute) {

  this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesAdetails.getMoviesDetails(this.id).subscribe((data)=>{

      this.MoviesDetails = data ;
      this.isLoading = true;
      console.log(this.MoviesDetails);

    },(error)=>{})


 }
  


  ngOnInit(): void {
  }

}

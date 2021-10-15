import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  personDetails:any;
  id:any;
  isLoading:boolean = false ;
  
  imageFirstPart ="https://image.tmdb.org/t/p/w500";

 constructor(_MoviesAdetails:MoviesApiService,public _ActivatedRoute:ActivatedRoute) {

  this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesAdetails.getPersonsDetails(this.id).subscribe((data)=>{

      this.personDetails = data ;
      this.isLoading = true;
      console.log(this.personDetails);

    },(error)=>{})


 }
  


  ngOnInit(): void {
  }

}

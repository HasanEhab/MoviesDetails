import { Component, OnInit } from '@angular/core';
import {MoviesApiService} from '../movies-api.service'


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  trendingPersons:any[] =[] ;
  
  imageFirstPart ="https://image.tmdb.org/t/p/w500";

 constructor(_MoviesApipersons:MoviesApiService) {

  _MoviesApipersons.getTrendingPersons().subscribe((data)=>{

     this.trendingPersons = data.results ;

   },(error)=>{})

  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(public _HttpClient:HttpClient) {

  }

getTrendingMovie():Observable<any>
{

  return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=0df234432f8793b594a3b4edddc0e3a0")
}

getTrendingSeries():Observable<any>
{

  return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=0df234432f8793b594a3b4edddc0e3a0")
}

getTrendingPersons():Observable<any>
{

  return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=0df234432f8793b594a3b4edddc0e3a0")
}

getPersonsDetails(id:any):Observable<any>
{

  return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=0df234432f8793b594a3b4edddc0e3a0&language=en-US`)
}

getMoviesDetails(id:any):Observable<any>
{

  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0df234432f8793b594a3b4edddc0e3a0&language=en-US`)
}

getSeriesDetails(id:any):Observable<any>
{

  return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=0df234432f8793b594a3b4edddc0e3a0&language=en-US`)
}




}
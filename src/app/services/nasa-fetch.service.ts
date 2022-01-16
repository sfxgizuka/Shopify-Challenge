import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaFetchService {

  constructor(private http: HttpClient) { }

  getData(){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=vqLLH5fiYC8DGZmRHuioVOmL2SorwLxsK6CAA6hl'
    return this.http.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //https://ncaa-api.henrygd.me/openapi#GET/brackets/{sport}/{division}/{year}
  private apiUrl = 'https://ncaa-api.henrygd.me/brackets/basketball-men/d1/2026';

  constructor(private http: HttpClient) { }

  getGames(){
    return fetch('https://proxy.corsfix.com/?' + this.apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
}

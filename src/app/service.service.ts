import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //https://ncaa-api.henrygd.me/openapi#GET/brackets/{sport}/{division}/{year}
  private apiUrl = 'https://ncaa-api.henrygd.me/brackets/basketball-men/d1/2026';

  constructor(private http: HttpClient) { }

  getGames(){ // Consider defining an interface for type safety
    return this.http.get<any>('/brackets/basketball-men/d1/2026');
  }
}

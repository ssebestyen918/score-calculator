import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import testData from '../assets/test-data.json'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{

  production = false;
  data: any[] = [];

  ngOnInit(){
    if(this.production){
      // use api
    }
    else{
      this.data = testData.games.map((x) => new Game(x));
    }
  }
}

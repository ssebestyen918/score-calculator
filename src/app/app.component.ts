import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { squares } from 'src/assets/squares';
import { ColorIconEnum } from 'src/models/color-icon-enum';
import { Game } from 'src/models/game';
import { Leader } from 'src/models/leader';
import { Square } from 'src/models/square';
import { StatusEnum } from 'src/models/status.enum';
import { WinningSquare } from 'src/models/winning-square';
import testData from '../assets/test-data.json'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{

  production = false;
  data: Game[] = [];

  roundOf64: Game[]= [];
  roundOf32: Game[] = [];
  sweet16: Game[] = [];
  elite8: Game[] = [];
  final4: Game[] = [];
  championship: Game[] = []

  gameSubheader = '';
  prizeSubheader = '';

  allSquareWinners: WinningSquare[] = [];

  colorEnum = ColorIconEnum
  currentLeaderSubheader = '';

  constructor(private cdRef: ChangeDetectorRef){}

  ngOnInit(){
    if(this.production){
      // use api
    }
    else{
      const filteredData = testData.games.filter((x) => x.sectionId !== 1).sort((a, b) => a.startTimeEpoch - b.startTimeEpoch)
      this.data = filteredData.map((x, i) => new Game(x, i));

      // console.log(this.data)

      this.roundOf64 = this.data.filter((x) => x.Round === 1).sort((a,b) => b.Id - a.Id)
      this.roundOf32 = this.data.filter((x) => x.Round === 2).sort((a,b) => b.Id - a.Id)
      this.sweet16 = this.data.filter((x) => x.Round === 3).sort((a,b) => b.Id - a.Id)
      this.elite8 = this.data.filter((x) => x.Round === 4).sort((a,b) => b.Id - a.Id)
      this.final4 = this.data.filter((x) => x.Round === 5).sort((a,b) => b.Id - a.Id)
      this.championship = this.data.filter((x) => x.Round === 6).sort((a,b) => b.Id - a.Id)

      this.gameSubheader = `${this.data.filter((x) => x.Status === StatusEnum.Final).length} / ${this.data.length}`
      this.prizeSubheader = `$${this.data.reduce((accumulator, currentValue) => {
        if(currentValue.Status === StatusEnum.Final){
          return accumulator + currentValue.Payout
        }
        return accumulator
      }, 0)}`;
      const x: Square[] = [];
      
      squares.forEach(element => {
        x.push(new Square(element.Id, element.Name, element.Authored))
      });
    }
  }

  addRoundWinners(roundWinners: WinningSquare[]){
    this.allSquareWinners.push(...roundWinners)

    const uniqueObjectsMap = new Map(this.allSquareWinners.map(item => [item.GameId, item]));
    const uniqueObjectsArray = [...uniqueObjectsMap.values()];

    this.allSquareWinners = uniqueObjectsArray;

    this.allSquareWinners
    this.cdRef.detectChanges()
  }

  getCurrentLeader(leader: Leader){
    this.currentLeaderSubheader = leader?.Name
  }
}

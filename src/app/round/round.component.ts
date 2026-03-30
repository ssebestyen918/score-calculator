import { Component, EventEmitter, input, Output } from '@angular/core';
import { Game } from 'src/models/game';
import { StatusEnum } from 'src/models/status.enum';
import { WinningSquare } from 'src/models/winning-square';

@Component({
  selector: 'app-round',
  standalone: false,
  templateUrl: './round.component.html',
  styleUrl: './round.component.scss'
})
export class RoundComponent {

  @Output() roundWinnersEvent = new EventEmitter<WinningSquare[]>();

  title = input('')
  payout = input(0)
  gameCount = input(0)
  games = input<Game[]>([])

  roundWinners: WinningSquare[] = [];

  getGameCount(){
    return this.games().filter((x) => x.Status === StatusEnum.Final).length
  }

  addGameWinner(winningSquare: WinningSquare){
    this.roundWinners.push(winningSquare);
    this.roundWinnersEvent.emit(this.roundWinners)
  }

}

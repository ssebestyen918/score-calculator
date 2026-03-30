import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { Game } from 'src/models/game';
import { StatusEnum } from 'src/models/status.enum';
import { winningNumbers, losingNumbers, squares } from 'src/assets/squares';
import { WinningSquare } from 'src/models/winning-square';
@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  @Output() winnerEvent = new EventEmitter<WinningSquare>();

  gameStatus = StatusEnum;
  winner = ''
  game = input<Game>()

  ngOnInit(): void {
    if(this.game()?.Status === this.gameStatus.Final){
      const winningTeam = this.game()?.Teams.find((x) => x.Winner)
      const losingTeam = this.game()?.Teams.find((x) => !x.Winner)

      const winningDigit = winningTeam?.Score! % 10
      const losingDigit = losingTeam?.Score! % 10

      const xAxis = winningNumbers.findIndex((x) => x === winningDigit) + 1
      const yAxis = losingNumbers.findIndex((x) => x === losingDigit) + 1

      const winningSquare = squares.find((square) => square.X === xAxis && square.Y === yAxis)

      this.winner = winningSquare!.Name

      this.winnerEvent.emit(new WinningSquare(this.game()!.Id, winningSquare!.Name, this.game()!.Payout))
    }
  }
}

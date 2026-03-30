import { Component, effect, EventEmitter, input, OnInit, Output } from '@angular/core';
import { Leader } from 'src/models/leader';
import { WinningSquare } from 'src/models/winning-square';

@Component({
  selector: 'app-leaderboard',
  standalone: false,
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent{

  @Output() currentLeaderEvent = new EventEmitter<Leader>();

  winners = input<WinningSquare[]>(([]))
  leaders: Leader[] = []
  totalPool = 0;
  
  constructor(){
    effect(() => {
      this.totalPool = this.winners().reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue.Payout;
      }, 0); 

      const aggregateWinners = this.winners().reduce((acc:any, curr) => {
        if (!acc[curr.Name]) {
          acc[curr.Name] = { count: 0, totalPayout: 0 };
        }
        // Increment count and add to total payout
        acc[curr.Name].count += 1;
        acc[curr.Name].totalPayout += curr.Payout;
        
        return acc;
      }, {});
      
      const xLeader: Leader[] = [];
      Object.keys(aggregateWinners).forEach(key => {
        xLeader.push(new Leader(key, aggregateWinners[key].totalPayout, aggregateWinners[key].count ))
      })

      this.leaders = xLeader.sort((a, b) => b.TotalPayout - a.TotalPayout);

      this.currentLeaderEvent.emit(this.leaders[0])
    });
  }
}

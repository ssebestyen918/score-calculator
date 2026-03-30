import { Component, input } from '@angular/core';
import { Leader } from 'src/models/leader';

@Component({
  selector: 'app-leader',
  standalone: false,
  templateUrl: './leader.component.html',
  styleUrl: './leader.component.scss'
})
export class LeaderComponent {

  leader = input<Leader>();
  rank = input(0);

}

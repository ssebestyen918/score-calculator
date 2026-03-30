import { D } from '@angular/cdk/bidi-module.d-D-fEBKdS';
import { Component, input } from '@angular/core';
import { Team } from 'src/models/team';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  team = input<Team>()
  live = input(false)

  getClass(){
    if(this.live() && this.team()?.Winner){
      return 'live'
    }
    else if(this.team()?.Winner){
      return 'winner'
    }
    return ''
  }
}

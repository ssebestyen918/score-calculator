import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'

import { AppComponent } from './app.component';
import { SummaryItemComponent } from './summary/summary-item/summary-item.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RoundComponent } from './round/round.component';
import { GameComponent } from './game/game.component';
import { TeamComponent } from './team/team.component';
import { LeaderComponent } from './leader/leader.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SummaryItemComponent,
    LeaderboardComponent,
    LeaderComponent,
    RoundComponent,
    GameComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports:[],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

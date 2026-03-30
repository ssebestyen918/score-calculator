import { RoundEnum } from "./round-enum";
import { StatusEnum } from "./status.enum";
import { Team } from "./team";

export class Game {
    Id: number;
    Round: number;
    Status: string;
    Payout: number;
    Teams: Team[];

    
    constructor(notTypedGame: any, index: number) {
        this.Id = index + 1;
        this.Round = this.getRound(notTypedGame.startDate)
        this.Status = this.getStatus(notTypedGame.finalMessage)
        this.Payout = this.getPayout(this.Round),
        this.Teams = this.formatTeams(notTypedGame.teams)
    }

    formatTeams(teams: any[]){
        return teams.map((team) => new Team(team.nameShort, team.score, team.isWinner))
    }
    
    getStatus(notTypedStatus: string){
        if(notTypedStatus === 'FINAL'){
            return StatusEnum.Final
        }
        else if(notTypedStatus === ''){
            return StatusEnum.Upcoming
        }
        return StatusEnum.Live
    }
    
    getPayout(round: number){
        if(round === 1){
            return 10
        }
        else if(round === 2){
            return 15
        }
        else if(round === 3){
            return 35
        }
        else if(round === 4){
            return 70
        }
        else if(round === 5){
            return 125
        }
        else if(round === 6){
            return 300
        }
        return 0;
    }

    getRound(startDate: string){
        if(RoundEnum.Round1.includes(startDate)){
            return 1
        }
        else if(RoundEnum.Round2.includes(startDate)){
            return 2
        }
        else if(RoundEnum.Round3.includes(startDate)){
            return 3
        }
        else if(RoundEnum.Round4.includes(startDate)){
            return 4
        }
        else if(RoundEnum.Round5.includes(startDate)){
            return 5
        }
        else if(RoundEnum.Round6.includes(startDate)){
            return 6
        }
        return 0;
    }

}
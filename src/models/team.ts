export class Team {
    Name: string;
    Score: number;
    Winner: boolean;
 
    constructor(name: string, score: number, winner: boolean) {
        this.Name = name;
        this.Score = score;
        this.Winner = winner;
    }
}
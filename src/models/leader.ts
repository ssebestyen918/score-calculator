export class Leader {
    Name: string;
    TotalPayout: number;
    GamesWon: number
 
    constructor(name: string, payout: number, numberOfGames: number ) {
        this.Name = name
        this.TotalPayout = payout,
        this.GamesWon = numberOfGames
    }
}
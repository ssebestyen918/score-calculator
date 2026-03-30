export class WinningSquare {
    GameId: number;
    Name: string;
    Payout: number
 
    constructor(gameId:number, name: string, payout: number) {
        this.GameId = gameId;
        this.Name = name;
        this.Payout = payout;
    }
}
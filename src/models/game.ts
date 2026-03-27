export class Game {
    // Id: number;
    // Round: number;
    // HomeTeam: Team;
    // AwayTeam: Team;
    // Status: string;
    // HalfTimeScore: number[];
    // CurrentScore: number[];
    // WinningChances: {Type: string, Amount: number, SquareId: number}[];

    Id: number;
    Round: number;
    Title: string;

    
    constructor(notTypedGame: any) {
        this.Id = notTypedGame.game.gameID;
        this.Round = notTypedGame.game.bracketRound - 1;
        this.Title = notTypedGame.game.title;
    }
}
export class Square {
    Id: number;
    Name: string;
    Authored: string;
    X: number;
    Y: number;
 
    constructor(id: number, name: string, authored: string) {
        this.Id = id;
        this.Name = name;
        this.Authored = authored;
        this.X = this.getXValue(id);
        this.Y = this.getYValue(id);
    }

    getXValue(id: number){
        return (id - 1) % 10 + 1
    }
    getYValue(id: number){
        return Math.floor((id - 1) / 10) + 1
    }
}
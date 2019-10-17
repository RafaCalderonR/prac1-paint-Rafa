
export class Coordinates{

    constructor(private _axisX: number, private _axisY:number){

    }

    get axisX(): number {
        return this._axisX;
    }


    set axisX(value: number) {
        this._axisX = value;
    }

    get axisY(): number {
        return this._axisY;
    }


    set axisY(value: number) {
        this.axisY = value;
    }


    public calculateCoordinates = (
        event: MouseEvent,
        parent: HTMLCanvasElement
    ) => {
            (this._axisX = event.clientX - parent.offsetLeft),
            (this._axisY = event.clientY - parent.offsetLeft);
           
    };


    



}
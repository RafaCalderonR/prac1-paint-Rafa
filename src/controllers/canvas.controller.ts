
export class ShapeController{

    constructor(private _shape:string, private _axisX:number,private _axisY:number, private _size:number, private _color: string ){


    }

    get shape():string{
        return this._shape;
    }
    get axisX():number{
        return this._axisX;
    }
    get axisY():number{
        return this._axisY;
    }
    get size():number{
        return this._size;
    }
    get color():string{
        return this._color;
    }

    set shape(value:string){
        this._shape = value
    }

    set axisX(value:number){
        this._color = this.color
    }

    set axisY(value:number){

        this._axisY = this.axisY
    }
    set size(value:number){

        this._size = this.size
    }

    set color(value:string){
        this._color = value
    }






    private getLocalClickCoords = (event, parent) =>{
       
        //this.axisX = event.clientX - parent.offsetLeft,
        //this.asisY = event.clientY - parent.offsetLeft
    }


}
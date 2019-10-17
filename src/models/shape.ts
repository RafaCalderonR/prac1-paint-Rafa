import { ShapeModel } from './shape.model';


export class Shape implements ShapeModel{
    constructor(
        private _shapeName: string,
        private _size: number,
        private _color: string,
    ) { }

    get shapeName(): string {
        return this._shapeName;
    }
    get size(): number {
        return this._size;
    }
    get color(): string {
        return this._color;
    }


    set shapeName(value: string) {
        this._shapeName = value;
    }

    set axisX(value: number) {
        this._color = this.color;
    }

    
    set size(value: number) {
        this._size = this.size;
    }

    set color(value: string) {
        this._color = value;
    }

    public getParameters=()=>{

          const allParameteters  = {

            shape : this.shapeName,
            size  : this.size,
            color : this.color
        }

        return allParameteters;
    }


    

    
}

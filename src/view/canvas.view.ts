import ICircle from "../models/shapes/circle";
import ISquare from "../models/shapes/square";

export class CanvasView{

    private shapesForm: HTMLElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(private view: Document){
        this.init();
    }

    init():void{

        this.shapesForm = this.view.getElementById('menu1');
        this.canvas= this.view.getElementById('mycanvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');

    }

    

    DrawSquare = (parameters: ISquare) => {
        const { axisX, axisY, height, width } = parameters

        this.context.beginPath();
        this.context.fillRect(axisX, axisY, height, width)

    }

    drawCircle = (parameters: ICircle) => {

        const {  axisX, axisY, size } = parameters


        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }

    


}
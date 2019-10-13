import ISquare from '../models/shapes/square'
import ICircle from '../models/shapes/circle'


export class CanvasController{

    constructor(private context: CanvasRenderingContext2D){
        
    }

    DrawSquare=(parameters: ISquare)=>{
       const {axisX, axisY, height, width} = parameters

      this.context.beginPath();
      this.context.fillRect(axisX, axisY, height, width)

    }

    drawCircle=(parameters: ICircle)=>{

    }
}
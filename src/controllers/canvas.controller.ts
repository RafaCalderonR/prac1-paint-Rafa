import ISquare from '../models/shapes/square'
import ICircle from '../models/shapes/circle'


export class CanvasController {

    constructor(private context: CanvasRenderingContext2D) {

    }

    DrawSquare = (parameters: ISquare) => {
        const { context, axisX, axisY, height, width } = parameters

        context.beginPath();
        context.fillRect(axisX, axisY, height, width)

    }

    drawCircle = (parameters: ICircle) => {

        const { context, axisX, axisY, size } = parameters


        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }
}
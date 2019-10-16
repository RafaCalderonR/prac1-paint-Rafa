import { CanvasView } from "../view/canvas.view";

export class CanvasController {
    constructor(private canvasView: CanvasView){
        
    }


    public PaintMe(nameShape){
        const shapes={
            'quare': ()=>  this.canvasView.drawSquare(),
            'circle': ()=> this.canvasView.drawCircle(),
            'triangle': ()=> this.canvasView.drawTriangle()
        };

        return shapes[nameShape]
    }



}
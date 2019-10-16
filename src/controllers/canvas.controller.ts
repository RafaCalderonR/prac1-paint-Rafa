import { CanvasView } from "../view/canvas.view";
import { Shape } from "../models/shape";
export class CanvasController {
    constructor(private canvasView: CanvasView, private shape: Shape){
        
        this.prueba();
        
    }




    public prueba(){
       this.canvasView.click();
       //this.canvasView.drawSquare();
        console.log(this.shape)
    }

    

    public PaintMe(nameShape) {
        const shapes={
           'Quare': ()=>  this.canvasView.drawSquare(),
           'Circle': ()=> this.canvasView.drawCircle(),
           'Triangle': ()=> this.canvasView.drawTriangle()
        };

        return shapes[nameShape]
    }



}
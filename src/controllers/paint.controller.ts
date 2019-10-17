import { CanvasView } from "../view/canvas.view";
import { Shape } from "../models/shape";
import { MenuView } from "../view/menu.view";

export class PaintController {
    constructor(private shape: Shape, private canvasView: CanvasView ){
        
       this.startPaint();
        
    }

    public startPaint(){
       this.canvasView.click(this.PaintMe());
      
    }


    private PaintMe() {
        const shapes={
           'Square': ()=>  this.canvasView.drawSquare(),
           'Circle': ()=> this.canvasView.drawCircle(),
           'Triangle': ()=> this.canvasView.drawTriangle(),

        };
        

        return shapes[this.shape.shapeName]
    }



}
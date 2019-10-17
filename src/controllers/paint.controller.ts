import { CanvasView } from "../view/canvas.view";
import { Shape } from "../models/shape";


export class PaintController {
    constructor(private shape: Shape, private canvasView: CanvasView ){
        
      
       this.getValues();
        
    }

    private getValues(){
  /*     this.canvasView.getShapeValue();
       this.canvasView.getColorValue();
       this.canvasView.getSizeValue();
*/
     //  this.canvasView.click(this.PaintMe());

    }


   /*

    private PaintMe() {
        const shapes={
           'Square': ()=>  this.canvasView.drawSquare(),
           'Circle':  ()=> this.canvasView.drawCircle (),
           'Triangle': ()=> this.canvasView.drawTriangle(),
    
        };
        
    
        return (shapes[this.shape.shapeName])();
    }*/



}
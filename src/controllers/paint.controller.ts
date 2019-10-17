import { CanvasView } from "../view/canvas.view";
import { Shape } from "../models/shape";

export class PaintController {
  commandShapes: any;
  constructor(private shape: Shape, private canvasView: CanvasView) {

    this.commandShapes = {
      Square: this.canvasView.drawSquare,
      Circle: this.canvasView.drawCircle,
      Triangle: this.canvasView.drawTriangle,
      execute: function(action) {
        this[action]();
      }
    };

    this.canvasView.click(this.commandShapes);
  }

  

}

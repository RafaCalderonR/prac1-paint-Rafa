import { ShapeModel } from "../models/shape.model";

export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
 

  constructor(private view: Document ) {
     
    this.init();

  }

  private init() {
    this.getCanvas();
    this.getContext();
    
  }

  private getCanvas = () =>
    (this.canvas = this.view.getElementById("mycanvas") as HTMLCanvasElement);

  private getContext = () => (this.context = this.canvas.getContext("2d"));


 public getCordinates = (event: MouseEvent) =>
    this.controller.calculateCoordinates(event, this.canvas);*/

 public click = () => {
    this.canvas.addEventListener("click", event => {
      this.getCordinates(event);
      //console.log(this.shape);
    });
 };

  public drawSquare = (Parameters: ShapeModel) => {
  
   
    this.context.fillStyle = this.shape.color;
    this.context.fillRect(
      this.shape.axisX,
      this.shape.axisY,
      this.shape.size,
      this.shape.size
    );
  };

  public drawCircle = () => {
    this.context.beginPath();
    this.context.arc(
      this.shape.axisX,
      this.shape.size,
      this.shape.axisY,
      0,
      2 * Math.PI
    );
    this.context.stroke();
  };

 public drawTriangle = () =>{

    this.context.strokeStyle = this.shape.color;
    this.context.beginPath();
    this.context.moveTo(this.shape.axisX, this.shape.axisY);
    this.context.lineTo(this.shape.axisX, this.shape.axisY + this.shape.size);
    this.context.lineTo(this.shape.axisX + this.shape.size, this.shape.axisY + this.shape.size);
    this.context.closePath();
    this.context.stroke();

 }*/
}

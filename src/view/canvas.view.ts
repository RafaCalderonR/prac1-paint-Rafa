import { ShapeModel } from "../models/shape.model";
import { Coordinates } from "../models/coordinates";
export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(private view: Document, private coordinates: Coordinates) {
    this.init();
  }

  private init() {
    this.getCanvas();
    this.getContext();
    this.click();
  }

  private getCanvas = () =>
    (this.canvas = this.view.getElementById("mycanvas") as HTMLCanvasElement);

  private getContext = () => (this.context = this.canvas.getContext("2d"));

  public getCordinates = (event: MouseEvent) =>
    this.coordinates.calculateCoordinates(event, this.canvas);

  public click = () =>
    this.canvas.addEventListener("click", event => this.getCordinates(event));

  public drawSquare = (parameters: ShapeModel, coordinates: Coordinates) => {
    const { size, color } = parameters;

    this.context.fillStyle = color;
    this.context.fillRect(
      this.coordinates.axisX,
      this.coordinates.axisY,
      size,
      size
    );
  };

  public drawCircle = () => {
    /*  this.context.beginPath();
      this.context.arc(
        this.coordinates.axisX,
        this.coordinates.size,
        this.coordinates.axisY,
        0,
        2 * Math.PI
      );
      this.context.stroke();*/
  };

  public drawTriangle = () => {
    /* this.context.strokeStyle = this.shape.color;
     this.context.beginPath();
     this.context.moveTo(this.shape.axisX, this.shape.axisY);
     this.context.lineTo(this.shape.axisX, this.shape.axisY + this.shape.size);
     this.context.lineTo(this.shape.axisX + this.shape.size, this.shape.axisY + this.shape.size);
     this.context.closePath();
     this.context.stroke();*/
  };
}

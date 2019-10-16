import { ShapeController } from "../controllers/shape.model";

export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private shapesRadio: HTMLInputElement;
  private colorInput: HTMLInputElement;
  private size: HTMLInputElement;

  constructor(private view: Document, private shape: ShapeController) {
    this.initCaching();
    this.init();
  }

  private initCaching() {
    this.getShapeInput();
    this.getCanvas();
    this.getColorInput();
    this.getContext();
    this.getSizeInput();
  }

  private init(): void {
    this.getColorValue();
    this.getSizeValue();
    this.getShapeValue();
    this.paint();
  }

  private getCanvas = () =>
    (this.canvas = this.view.getElementById("mycanvas") as HTMLCanvasElement);

  private getContext = () => (this.context = this.canvas.getContext("2d"));

  private getColorInput = () =>
    (this.colorInput = this.view.getElementById(
      "input-color"
    ) as HTMLInputElement);

  private getSizeInput = () => {
    this.size = this.view.getElementById("input-size") as HTMLInputElement;
  };

  private getShapeInput = () => {
    this.shapesRadio = this.view.getElementById(
      "radio-group"
    ) as HTMLInputElement;
  };

  private getShapeValue = () =>
    this.shapesRadio.addEventListener(
      "click",
      e => (this.shape.shape = (e.target as HTMLInputElement).value)
    );

  private getColorValue = () => {
    this.colorInput.addEventListener(
      "click",
      e => (this.shape.color = (e.target as HTMLInputElement).value)
    );
  };

  private getSizeValue = () => {
    this.size.addEventListener(
      "click",
      e => (this.shape.size = Number((e.target as HTMLInputElement).value))
    );
  };

  private getCordinates = (event: MouseEvent) =>
    this.shape.calculateCoordinates(event, this.canvas);

  private paint = () => {
    this.canvas.addEventListener("click", event => {
      this.getCordinates(event);
      this.drawSquare();
    });
  };

  public drawSquare = () => {
    console.log(this.shape);
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
      this.shape.axisY,
      this.shape.size,
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

  }
}

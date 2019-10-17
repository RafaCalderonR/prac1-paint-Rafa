import { ShapeModel } from "../models/shape.model";
import { Shape } from "../models/shape";
export class CanvasView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private shapesRadio: HTMLInputElement;
  private colorInput: HTMLInputElement;
  private sizeInput: HTMLInputElement;
  private downloadButton: HTMLInputElement
  private cleanButton: HTMLInputElement;

  constructor(private view: Document, private shape: Shape, ) {
    this.init();
  }

  private init() {
    this.getCanvas();
    this.getContext();
    this.getColorInput();
    this.getSizeInput();
    this.getShapeInput();
    this.getShapeValue();
    this.getColorValue();
    this.getSizeValue();
    this.getDowloadButton();
    this.getCleanButton();
    this.click();
    this.downloadEvent();
    this.cleanCanvas();
  }

  private getCanvas = () =>
    (this.canvas = this.view.getElementById("mycanvas") as HTMLCanvasElement);

  private getContext = () => (this.context = this.canvas.getContext("2d"));


  private getColorInput = () =>
    (this.colorInput = this.view.getElementById(
      "input-color"
    ) as HTMLInputElement);


  private getDowloadButton = () =>
  (this.downloadButton = this.view.getElementById(
    "download-button"
  ) as HTMLInputElement);

  private getSizeInput = () => {
    this.sizeInput = this.view.getElementById("input-size") as HTMLInputElement;
  };

  private getShapeInput = () => {
    this.shapesRadio = this.view.getElementById(
      "radio-group"
    ) as HTMLInputElement;
  };

  private getCleanButton = () => {
    this.cleanButton = this.view.getElementById(
      "clean-button"
    ) as HTMLInputElement;
  }

  private getShapeValue = () =>
    this.shapesRadio.addEventListener(
      "click",
      e => (this.shape.shapeName = (e.target as HTMLInputElement).value)
    );

  private getColorValue = () => {
    this.colorInput.addEventListener(
      "click",
      e => (this.shape.color = (e.target as HTMLInputElement).value))
  };

  private getSizeValue = () => {
    this.sizeInput.addEventListener(
      "click",
      e => (this.shape.size = Number((e.target as HTMLInputElement).value))
    );
  };

  


  private cleanCanvas(){
    this.cleanButton.addEventListener('click', ()=>
     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    )
  }


  private downloadEvent(){
    this.downloadButton.addEventListener('click', () => this.downloadCanvas())
  }

  private downloadCanvas(){
    const image=  this.canvas.toDataURL('img/png').replace("image/png", "image/octet-stream");;
    window.location.href=image
  }


  private getCordinates = (event: MouseEvent) =>
    this.shape.calculateCoordinates(event, this.canvas);

  private click = () => {
    this.canvas.addEventListener("click", event => {
      this.getCordinates(event)


      this.PaintMe()
      
    })
  };


  private drawSquare = () => {

    this.context.fillStyle = this.shape.color;
    this.context.fillRect(
      this.shape.axisX,
      this.shape.axisY,
      this.shape.size,
      this.shape.size
    );
  };

  private drawCircle = () => {
    this.context.beginPath();
    this.context.arc(
      this.shape.axisX,
     
      this.shape.axisY,
      this.shape.size/2,
      0,
      2 * Math.PI, true
    );
    this.context.stroke();
  };

  private drawTriangle = () => {
    this.context.strokeStyle = this.shape.color;
    this.context.beginPath();
    this.context.moveTo(this.shape.axisX, this.shape.axisY);
    this.context.lineTo(this.shape.axisX, this.shape.axisY + this.shape.size);
    this.context.lineTo(this.shape.axisX + this.shape.size, this.shape.axisY + this.shape.size);
    this.context.closePath();
    this.context.stroke();
  };


  private PaintMe() {
      
    const shapes={
       'Square': ()=>  this.drawSquare(),
       'Circle':  ()=> this.drawCircle (),
       'Triangle': ()=> this.drawTriangle(),

    };
    

    return (shapes[this.shape.shapeName])();
}

}

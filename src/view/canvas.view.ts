
import IParameter from "../models/parameters";
import { ShapeController } from "../controllers/canvas.controller";

export class CanvasView{

    
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private shapesRadio: HTMLInputElement;
    private colorInput: HTMLInputElement;
    private parameters: IParameter;
    private size: HTMLInputElement;

    constructor(private view: Document, private controller: ShapeController){

        this.initCaching();
        this.init();
    }

    private initCaching(){

        this.getShapeInput();
        this.getCanvas();
        this.getColorInput();
        this.getContext(); 
        this.getSizeInput();

    }

    
    private init():void{

        this.draw();
        this.getColorValue();
        this.getSizeValue();
        this.getShapeValue();

    }

   



    

    private getCanvas=()=>

        this.canvas = this.view.getElementById('mycanvas') as HTMLCanvasElement;
    


    private getContext=()=>
        
        this.context = this.canvas.getContext('2d');
    

    private getColorInput=()=>
        
        this.colorInput = this.view.getElementById('input-color') as HTMLInputElement;
    

    private getSizeInput=()=>{
        
        this.size = this.view.getElementById('input-size') as HTMLInputElement;
    }


    private getShapeInput=()=>{

        this.shapesRadio = this.view.getElementById('radio-group') as HTMLInputElement;
    } 

    private getShapeValue=()=>

        this.shapesRadio.addEventListener('click', (e)=> this.parameters['shape'] = ((e.target as HTMLInputElement).value) )
        
        
    

    private getColorValue=()=>{

        this.colorInput.addEventListener('click', (e)=> this.parameters['color']=((e.target as HTMLInputElement).value) );

    }

    private getSizeValue=()=>{

        this.size.addEventListener('click', (e)=> this.parameters['size']=Number(((e.target as HTMLInputElement).value) ));

    }

    private draw() {

        this.canvas.addEventListener('click', (event)=> {

             this.getLocalClickCoords(event, this.canvas)
             this.drawSquare();

        });
    }

 
    private getLocalClickCoords = (event, parent) =>{
       
            this.parameters['axisX'] = event.clientX - parent.offsetLeft,
            this.parameters['axisY'] = event.clientY - parent.offsetLeft
        
    }
    

    drawSquare = () => {

        const { shape, axisX, axisY, size, color} = this.parameters
        console.log(this.parameters)

        this.context.fillStyle = color
        this.context.fillRect(axisX, axisY, size, size);

    }

    drawCircle = (parameters) => {

        const {  axisX, axisY, size } = parameters

        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }

    


}
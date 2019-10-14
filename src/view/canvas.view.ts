import ICircle from "../models/shapes/circle";
import ISquare from "../models/shapes/square";
import IParameter from "../models/parameters";

export class CanvasView{

    
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private shapes: HTMLInputElement;
    private color: HTMLInputElement;
    private parameters: IParameter;


    constructor(private view: Document){

        this.initCaching();
        this.init();
        this.initParameters();
    }

    private initCaching(){

        this.getShapeInput();
        this.getCanvas();
        this.getColorInput();
        this.getContext(); 

       
    }

    init():void{

        this.draw();
        this.getColorValue();
        
    }

    initParameters(){

        this.parameters = {
            shape: "",
            axisX:  0,
            axisY:  0,
            height: 100,
            width: 100
           
    }
    this.getShapeValue();
     console.log(this.parameters)
    }

    

    private getCanvas=()=>{

        this.canvas = this.view.getElementById('mycanvas') as HTMLCanvasElement;
    }


    private getContext=()=>{
        
        this.context = this.canvas.getContext('2d');
    }

    private getColorInput=()=>{
        
        this.color = this.view.getElementById('input-color') as HTMLInputElement;
    }


    private getShapeInput=()=>{

        this.shapes = this.view.getElementById('radio-group') as HTMLInputElement;
    } 

    private getShapeValue=()=>{

        this.shapes.addEventListener('click', (e)=> this.parameters['shape'] = ((e.target as HTMLInputElement).value) )
        
        
    }

    private getColorValue=()=>{

        this.color.addEventListener('click', (e)=> this.parameters['color']=((e.target as HTMLInputElement).value) );

    }

    

   

    private  draw() {

        this.canvas.addEventListener('click', (event)=> {

             this.getLocalClickCoords(event, this.canvas)
             this.drawSquare();
            
        });
    }

 

     getLocalClickCoords = (event, parent) =>{
       
            
            this.parameters['axisX'] = event.clientX - parent.offsetLeft,
            this.parameters['axisY'] = event.clientY - parent.offsetLeft
        
    }
    

    

    drawSquare = () => {

        console.log(this.parameters)

        const { shape, axisX, axisY, height, width } = this.parameters
        this.context.fillStyle()
        this.context.fillRect(axisX, axisY, height, width);

    }

    drawCircle = (parameters: ICircle) => {

        const {  axisX, axisY, size } = parameters


        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }

    


}
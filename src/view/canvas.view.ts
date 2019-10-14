import ICircle from "../models/shapes/circle";
import ISquare from "../models/shapes/square";

export class CanvasView{

    private shapesForm: HTMLInputElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private shape: HTMLInputElement;
    private color: HTMLInputElement;


    constructor(private view: Document){

        this.initCaching();
        this.init();
        this.initParameters();

    }

    private initCaching(){

        this.getShapeInput();
        this.getCanvas();
        this.getColorInput();
        
       
    }

    init():void{

        this.draw();
        this.getColorValue()
    }

    initParameters(){

        const parameters = {
            axisX:  0,
            axisY:  0,
            height: 0,
           
    }
        const figure = {
          
            figure: "",
    }
    }






    

    
    private getShapeInput=()=>{

        this.shape = this.view.getElementById('radio-group') as HTMLInputElement;
       
    } 

    private getShapeValue=()=>{

        this.shape.addEventListener('click', (e)=> console.log((e.target as HTMLInputElement).value) );
    }

    /*private getColorValue=()=>{
        this.color.addEventListener('click', (e)=> console.log((e.target as HTMLInputElement).value) );
    }*/

    private getCanvas=()=>{

        this.canvas = this.view.getElementById('mycanvas') as HTMLCanvasElement;
    }


    private getContext=()=>{
        
        this.context = this.canvas.getContext('2d');
    }

    private getColorInput=()=>{
        
        this.color = this.view.getElementById('input-color') as HTMLInputElement;
    }

    private getColorValue=()=>{
        console.log(this.color.value)
    }

     draw() {

        this.canvas.addEventListener('click', (event)=> {
            const coordinates = this.getLocalClickCoords(event, this.canvas)
            const parameters={
                axisX: coordinates.x,
                axisY: coordinates.y,
                height: 100,
                width: 100
            }
            this.drawSquare(parameters)

        });
    }

    getValue(){
        this.shape, this.color
    }

    

     getLocalClickCoords = (event, parent) =>{
        return {
            
            x: event.clientX - parent.offsetLeft,
            y: event.clientY - parent.offsetLeft,
        }
    }
    

    

    drawSquare = (parameters: ISquare) => {

       
        const { axisX, axisY, height, width } = parameters
        
        
        this.context.fillRect(axisX, axisY, height, width)

    }

    drawCircle = (parameters: ICircle) => {

        const {  axisX, axisY, size } = parameters


        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }

    


}
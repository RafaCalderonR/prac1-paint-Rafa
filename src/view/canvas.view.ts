class CanvasView{

    public shapesForm: HTMLElement;
    public canvas: HTMLCanvasElement;

    constructor(private view: Document){

        this.init();
    }

    init():void{
        this.shapesForm = this.view.getElementById('menu1');
        this.canvas= this.view.getElementById('mycanvas') as HTMLCanvasElement;

        console.log(this.shapesForm)
    }

    


}
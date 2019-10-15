import { CanvasView } from "../view/canvas.view";

export class CanvasController {
    constructor(){
        
    }


    public PaintMe(nameShape){
        const shapes={
            'quare': ()=>  CanvasView.Square(),
            'circle': ()=> CanvasView.Circle();
        };

        return shapes[nameShape]
    }



}
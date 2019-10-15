import { CanvasView } from "../view/canvas.view";

class CanvasController {
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
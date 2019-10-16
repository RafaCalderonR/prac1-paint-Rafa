import { Shape } from "../models/shape";

export class MenuView {


    private shapesRadio: HTMLInputElement;
    private colorInput: HTMLInputElement;
    private size: HTMLInputElement;

    constructor(private view: Document,
        private shape: Shape,
    ) {

        this.initCaching();

    }

    initCaching() {
        this.getColorInput();
        this.getSizeInput();
        this.getShapeInput();
    }

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

    public getShapeValue = () =>
        this.shapesRadio.addEventListener(
            "click",
            e => (this.shape.shapeName = (e.target as HTMLInputElement).value)
        );

    public getColorValue = () => {
        this.colorInput.addEventListener(
            "click",
            e => (this.shape.color = (e.target as HTMLInputElement).value))
    };

    public getSizeValue = () => {
        this.size.addEventListener(
            "click",
            e => (this.shape.size = Number((e.target as HTMLInputElement).value))
        );
    };


}
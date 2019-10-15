import {CanvasView} from './view/canvas.view'
import { ShapeModel } from './models/shape.model';

const view: Document = window.document;

const controller = new ShapeModel("square", 0, 0 , 100, "#C0C0C0");
const pepe: CanvasView = new CanvasView(window.document, controller);


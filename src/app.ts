import {CanvasView} from './view/canvas.view'
import { Shape } from './models/shape';
import { PaintController } from './controllers/paint.controller';
import './assets/styles.css'



const view: Document = window.document;
const shape: Shape = new Shape(200, 200, "Square", 100, "#C0C0C0");
const canvasView: CanvasView = new CanvasView(window.document, shape);
const controller= new PaintController(shape, canvasView)

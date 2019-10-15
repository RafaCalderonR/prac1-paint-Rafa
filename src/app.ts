import {CanvasView} from './view/canvas.view'
import { ShapeController } from './controllers/canvas.controller';

const view: Document = window.document;

const controller = new ShapeController("square", 0, 0 , 100, "#C0C0C0");
const pepe: CanvasView = new CanvasView(window.document, controller);


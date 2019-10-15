import {CanvasView} from './view/canvas.view'
import { ShapeModel } from './models/shape.model';
import { CanvasController } from './controllers/canvas.controller';

const view: Document = window.document;

const shapeModel: ShapeModel = new ShapeModel("square", 0, 0 , 100, "#C0C0C0");
const canvasView: CanvasView = new CanvasView(window.document, shapeModel);
const controller: CanvasController = new CanvasController()

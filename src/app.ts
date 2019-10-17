import {CanvasView} from './view/canvas.view'
import { Shape } from './models/shape';
import { PaintController } from './controllers/paint.controller';
import {MenuView}   from './view/menu.view'



const view: Document = window.document;

const shape: Shape = new Shape(200, 200, "Triangle", 100, "#C0C0C0");
//const menuView: MenuView = new MenuView(view, shape);
const canvasView: CanvasView = new CanvasView(window.document, shape);

const controller= new PaintController(shape, canvasView)

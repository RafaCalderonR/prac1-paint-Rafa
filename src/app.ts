import {CanvasView} from './view/canvas.view'
import { Shape } from './models/shape';
import { CanvasController } from './controllers/canvas.controller';
import {MenuView}   from './view/menu.view'
import { Coordinates } from './models/coordinates';


const view: Document = window.document;

const coordinates: Coordinates = new Coordinates(10,10);
const shapeModel: Shape = new Shape("square", 100, "#C0C0C0");
const menuView = new MenuView(view, shapeModel);
const canvasView: CanvasView = new CanvasView(window.document,coordinates);

//const controller: CanvasController = new CanvasController(canvasView,shapeModel)

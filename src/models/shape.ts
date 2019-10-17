import { IShapeModel } from "./shape.interface";

export class Shape implements IShapeModel {
  constructor(
    private _axisX: number,
    private _axisY: number,
    private _shapeName: string,
    private _size: number,
    private _color: string
  ) {}

  get axisX(): number {
    return this._axisX;
  }

  get axisY(): number {
    return this._axisY;
  }

  get shapeName(): string {
    return this._shapeName;
  }

  get size(): number {
    return this._size;
  }

  get color(): string {
    return this._color;
  }

  set shapeName(value: string) {
    this._shapeName = value;
  }

  set size(value: number) {
    this._size = value;
  }

  set color(value: string) {
    this._color = value;
  }

  set axisX(value: number) {
    this._axisX = value;
  }

  set axisY(value: number) {
    this._axisY = value;
  }

  public calculateCoordinates = (
    event: MouseEvent,
    parent: HTMLCanvasElement
  ) => {
      (this.axisX = event.clientX - parent.offsetLeft),
      (this.axisY = event.clientY - parent.offsetLeft);
  };
}

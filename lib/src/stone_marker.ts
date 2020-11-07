export default class StoneMarker {
  private readonly diameter: number = 10;
  private _x: number = 100;
  private _y: number = 100;

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  moveRight(): void {
    this._x += this.diameter;
  }

  moveDown(): void {
    this._y += this.diameter;
  }

  moveLeft(): void {
    this._x -= this.diameter;
  }

  moveUp(): void {
    this._y -= this.diameter;
  }

  draw(): void {
    const canvas: HTMLCanvasElement = document.querySelector(
      "canvas.StoneLayer"
    ) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    context.beginPath();
    context.arc(this._x, this._y, this.diameter, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
  }
}

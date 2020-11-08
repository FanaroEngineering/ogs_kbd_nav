export class StoneMarkerUI {
  

  draw(): void {
    const canvas: HTMLCanvasElement = document.querySelector(
      "canvas.StoneLayer"
    ) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    context.beginPath();
    // context.arc(this._x, this._y, this.diameter, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
  }
}
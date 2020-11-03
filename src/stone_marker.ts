export default class StoneMarker {
  constructor(public sideLength: number = 10) {}

  draw(x: number, y: number): void {
    const canvas: HTMLCanvasElement = document.querySelector('canvas.StoneLayer') as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
  }
}
import StoneMarker from "../components/stone_marker";

export enum Direction {
  right,
  down,
  left,
  up,
}

export default class StoneMarkerUi {
  private stoneMarker: StoneMarker = new StoneMarker();
  private stoneMarkerCanvas: HTMLCanvasElement = new HTMLCanvasElement();

  constructor() {
    const gobanDiv: HTMLDivElement = document.querySelector(
      "div.Goban"
    ) as HTMLDivElement;
    const width: number = +gobanDiv.style.width;
    const height: number = +gobanDiv.style.height;

    this.stoneMarkerCanvas.width = width;
    this.stoneMarkerCanvas.height = height;

    gobanDiv.append(this.stoneMarkerCanvas);
  }

  move(direction: Direction): void {
    switch (direction) {
      case Direction.right:
        this.stoneMarker = this.stoneMarker.moveRight();
        break;
      case Direction.down:
        this.stoneMarker = this.stoneMarker.moveDown();
        break;
      case Direction.left:
        this.stoneMarker = this.stoneMarker.moveLeft();
        break;
      case Direction.up:
        this.stoneMarker = this.stoneMarker.moveUp();
        break;
    }
    this.draw();
  }

  private draw(): void {
    const context: CanvasRenderingContext2D = this.stoneMarkerCanvas.getContext(
      "2d"
    )!;

    context.beginPath();
    context.arc(
      this.stoneMarker.x,
      this.stoneMarker.y,
      StoneMarker.diameter,
      0,
      2 * Math.PI,
      false
    );
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
  }
}

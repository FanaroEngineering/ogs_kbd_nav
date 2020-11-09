import StoneMarker from "../components/stone_marker";

export enum Direction {
  right,
  down,
  left,
  up,
}

export default class StoneMarkerUi {
  private stoneMarker: StoneMarker = new StoneMarker();
  private stoneMarkerCanvas: HTMLCanvasElement;

  constructor() {
    const gobanDiv: HTMLDivElement = document.querySelector(
      "div.Goban > div"
    )! as HTMLDivElement;
    const shadowCanvas: HTMLCanvasElement = document.querySelector(
      "div.Goban > div > canvas#shadow-canvas"
    )! as HTMLCanvasElement;
    const width: number = shadowCanvas.width;
    const height: number = shadowCanvas.height;

    this.stoneMarkerCanvas = document.createElement(
      "canvas"
    ) as HTMLCanvasElement;
    this.stoneMarkerCanvas.id = "stone-marker";
    this.stoneMarkerCanvas.style.zIndex = "21";
    this.stoneMarkerCanvas.style.position = "absolute";
    this.stoneMarkerCanvas.width = width;
    this.stoneMarkerCanvas.height = height;

    gobanDiv.append(this.stoneMarkerCanvas);
  }

  clear = (): void =>
    this.stoneMarkerCanvas
      .getContext("2d")
      ?.clearRect(
        0,
        0,
        this.stoneMarkerCanvas.width,
        this.stoneMarkerCanvas.height
      );

  move = (direction: Direction): void => {
    this.clear();
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
  };

  private draw = (): void => {
    const context: CanvasRenderingContext2D = this.stoneMarkerCanvas.getContext(
      "2d"
    )!;

    context.beginPath();
    context.arc(
      this.stoneMarker.x,
      this.stoneMarker.y,
      StoneMarker.radius,
      0,
      2 * Math.PI
    );
    context.lineWidth = 3;
    context.strokeStyle = "green";
    context.stroke();
  };
}

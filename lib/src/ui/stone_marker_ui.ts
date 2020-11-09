import StoneMarker from "../components/stone_marker";

export enum Direction {
  right,
  down,
  left,
  up,
}

export default class StoneMarkerUi {
  static readonly shadowCanvasQuery: string =
    "div.Goban > div > canvas#shadow-canvas";

  private stoneMarker: StoneMarker = new StoneMarker();
  private stoneMarkerCanvas: HTMLCanvasElement = document.createElement(
    "canvas"
  ) as HTMLCanvasElement;

  constructor() {
    this.configureStoneMarkerCanvas();
    this.appendStoneMarkerCanvas();
  }

  private configureStoneMarkerCanvas = (): void => {
    const shadowCanvas: HTMLCanvasElement = document.querySelector(
      StoneMarkerUi.shadowCanvasQuery
    ) as HTMLCanvasElement;
    const width: number = shadowCanvas.width;
    const height: number = shadowCanvas.height;

    this.stoneMarkerCanvas.id = "stone-marker";
    this.stoneMarkerCanvas.style.zIndex = "21";
    this.stoneMarkerCanvas.style.position = "absolute";
    this.stoneMarkerCanvas.width = width;
    this.stoneMarkerCanvas.height = height;
  };

  private appendStoneMarkerCanvas = (): void => {
    const gobanDiv: HTMLDivElement = document.querySelector(
      "div.Goban > div"
    ) as HTMLDivElement;
    gobanDiv.append(this.stoneMarkerCanvas);
  };

  private clear = (): void =>
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
    this.moveSwitch(direction);
    this.draw();
  };

  private moveSwitch = (direction: Direction): void => {
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

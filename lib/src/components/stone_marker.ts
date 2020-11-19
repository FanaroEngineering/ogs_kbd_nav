export default class StoneMarker {
  constructor(
    private readonly data: StoneMarkerData = StoneMarkerData.default()
  ) {}

  get radius(): number {
    return this.data.radius;
  }

  get x(): number {
    return this.data.x;
  }

  get y(): number {
    return this.data.y;
  }

  private get step(): number {
    return this.data.diameter + this.data.dxdy;
  }

  private get notRightEdge(): boolean {
    if (this.data.gobanX < 19) return true;
    else return false;
  }

  moveRight = (): StoneMarker =>
    this.notRightEdge
      ? new StoneMarker(
          this.data.copyWithX(this.x + this.step, this.data.gobanX + 1)
        )
      : this;

  private get notLowerEdge(): boolean {
    if (this.data.gobanY > 1) return true;
    else return false;
  }

  moveDown = (): StoneMarker =>
    this.notLowerEdge
      ? new StoneMarker(
          this.data.copyWithY(this.y + this.step, this.data.gobanY - 1)
        )
      : this;

  private get notLeftEdge(): boolean {
    if (this.data.gobanX > 1) return true;
    else return false;
  }

  moveLeft = (): StoneMarker =>
    this.notLeftEdge
      ? new StoneMarker(
          this.data.copyWithX(this.x - this.step, this.data.gobanX - 1)
        )
      : this;

  private get notTopEdge(): boolean {
    if (this.data.gobanY < 19) return true;
    else return false;
  }

  moveUp = (): StoneMarker =>
    this.notTopEdge
      ? new StoneMarker(
          this.data.copyWithY(this.y - this.step, this.data.gobanY + 1)
        )
      : this;

  static changeRatio = (ratio: number): StoneMarker =>
    new StoneMarker(StoneMarkerData.fromRatio(ratio));

  // TODO: try to get rid of the `ratio` parameter.
  static fromCoordinates = (coord: string, ratio: number = 1): StoneMarker => {
    const preGobanX: number = coord.match("[a-t]")![0].charCodeAt(0) - 96;
    const gobanX: number = preGobanX > 8 ? preGobanX - 1 : preGobanX;
    const gobanY: number = +coord.match("[0-1]?[0-9]")![0];

    let stoneMarker: StoneMarker = StoneMarker.changeRatio(ratio);

    for (let i = 0; i < gobanX - 1; i++) stoneMarker = stoneMarker.moveRight();
    for (let i = 0; i < gobanY - 1; i++) stoneMarker = stoneMarker.moveUp();

    return stoneMarker;
  };
}

export class StoneMarkerData {
  private static readonly defaultRadiusDxDy = 8;
  private static readonly defaultX = 35.75;
  private static readonly defaultY = 467.75;

  static default = (): StoneMarkerData => new StoneMarkerData();

  static fromRatio = (ratio: number): StoneMarkerData =>
    new StoneMarkerData(
      ratio * StoneMarkerData.defaultRadiusDxDy,
      ratio * StoneMarkerData.defaultRadiusDxDy,
      ratio * StoneMarkerData.defaultX,
      ratio * StoneMarkerData.defaultY
    );

  private constructor(
    readonly radius: number = StoneMarkerData.defaultRadiusDxDy,
    readonly dxdy: number = StoneMarkerData.defaultRadiusDxDy,
    readonly x: number = StoneMarkerData.defaultX,
    readonly y: number = StoneMarkerData.defaultY,
    readonly gobanX: number = 1,
    readonly gobanY: number = 1
  ) {}

  get diameter(): number {
    return 2 * this.radius;
  }

  copyWithX = (newX: number, newGobanX: number) =>
    new StoneMarkerData(
      this.radius,
      this.dxdy,
      newX,
      this.y,
      newGobanX,
      this.gobanY
    );

  copyWithY = (newY: number, newGobanY: number) =>
    new StoneMarkerData(
      this.radius,
      this.dxdy,
      this.x,
      newY,
      this.gobanX,
      newGobanY
    );
}

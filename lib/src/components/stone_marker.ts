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

  static fromCoordinates = (coord: string): StoneMarker => {
    const lowerCoord: string = coord.toLowerCase();
    const splitCoord: string[] = lowerCoord.split(/[a-z]/);
    console.log(splitCoord);

    return new StoneMarker();
  };
}

export class StoneMarkerData {
  private static readonly defaultRadiusDxDy = 8;
  private static readonly defaultXY = 35.75;

  static default = (): StoneMarkerData => new StoneMarkerData();

  static fromRatio = (ratio: number): StoneMarkerData =>
    new StoneMarkerData(
      ratio * StoneMarkerData.defaultRadiusDxDy,
      ratio * StoneMarkerData.defaultRadiusDxDy,
      ratio * StoneMarkerData.defaultXY,
      ratio * StoneMarkerData.defaultXY
    );

  private constructor(
    readonly radius: number = StoneMarkerData.defaultRadiusDxDy,
    readonly dxdy: number = StoneMarkerData.defaultRadiusDxDy,
    readonly x: number = StoneMarkerData.defaultXY,
    readonly y: number = StoneMarkerData.defaultXY,
    readonly gobanX: number = 1,
    readonly gobanY: number = 19
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

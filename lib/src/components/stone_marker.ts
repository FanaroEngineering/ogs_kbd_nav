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

  moveRight = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithX(this.data.x + this.data.diameter + this.data.dxdy)
    );

  moveDown = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithY(this.data.y + this.data.diameter + this.data.dxdy)
    );

  moveLeft = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithX(this.data.x - this.data.diameter - this.data.dxdy)
    );

  moveUp = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithY(this.data.y - this.data.diameter - this.data.dxdy)
    );

  static changeRatio = (ratio: number): StoneMarker =>
    new StoneMarker(StoneMarkerData.fromRatio(ratio));
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
    readonly y: number = StoneMarkerData.defaultXY
  ) {}

  get diameter(): number {
    return 2 * this.radius;
  }

  copyWithX = (newX: number) =>
    new StoneMarkerData(this.radius, this.dxdy, newX, this.y);

  copyWithY = (newY: number) =>
    new StoneMarkerData(this.radius, this.dxdy, this.x, newY);
}

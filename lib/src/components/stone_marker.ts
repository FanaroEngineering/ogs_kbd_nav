import { GobanSize } from "./config";

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

  static changeRatio = (
    ratio: number,
    gobanSize: GobanSize = GobanSize.full19x19
  ): StoneMarker =>
    new StoneMarker(StoneMarkerData.fromRatio(ratio, gobanSize));

  static fromCoordinates = (
    coord: string,
    ratio: number = 1,
    gobanSize: GobanSize = GobanSize.full19x19
  ): StoneMarker => {
    const preGobanX: number = coord.match("[a-t]")![0].charCodeAt(0) - 96;
    const gobanX: number = preGobanX > 8 ? preGobanX - 1 : preGobanX;
    const gobanY: number = +coord.match("[0-1]?[0-9]")![0];

    let stoneMarker: StoneMarker = StoneMarker.changeRatio(ratio, gobanSize);

    for (let i = 0; i < gobanX - 1; i++) stoneMarker = stoneMarker.moveRight();
    for (let i = 0; i < gobanY - 1; i++) stoneMarker = stoneMarker.moveUp();

    return stoneMarker;
  };
}

export class StoneMarkerData {
  private static readonly default19x19RadiusDxDy = 8;
  private static readonly default19x19X = 35.75;
  private static readonly default19x19Y = 467.75;

  private static readonly default13x13Radius = 11;
  private static readonly default13x13DxDy = 11.5875;
  private static readonly default13x13X = 50.525;
  private static readonly default13x13Y = 453.65;

  private static readonly default9x9Radius = 14;
  private static readonly default9x9DxDy = 17.8;
  private static readonly default9x9X = 68.5;
  private static readonly default9x9Y = 435;

  static default = (
    gobanSize: GobanSize = GobanSize.full19x19
  ): StoneMarkerData => {
    switch (gobanSize) {
      case GobanSize.full19x19:
        return new StoneMarkerData();
      case GobanSize.medium13x13:
        return new StoneMarkerData(
          StoneMarkerData.default13x13Radius,
          StoneMarkerData.default13x13DxDy,
          StoneMarkerData.default13x13X,
          StoneMarkerData.default13x13Y
        );
      case GobanSize.small9x9:
        return new StoneMarkerData(
          StoneMarkerData.default9x9Radius,
          StoneMarkerData.default9x9DxDy,
          StoneMarkerData.default9x9X,
          StoneMarkerData.default9x9Y
        );
    }
  };

  static fromRatio = (
    ratio: number,
    gobanSize: GobanSize = GobanSize.full19x19
  ): StoneMarkerData => {
    switch (gobanSize) {
      case GobanSize.full19x19:
        return new StoneMarkerData(
          ratio * StoneMarkerData.default19x19RadiusDxDy,
          ratio * StoneMarkerData.default19x19RadiusDxDy,
          ratio * StoneMarkerData.default19x19X,
          ratio * StoneMarkerData.default19x19Y
        );
      case GobanSize.medium13x13:
        return new StoneMarkerData(
          ratio * StoneMarkerData.default13x13Radius,
          ratio * StoneMarkerData.default13x13DxDy,
          ratio * StoneMarkerData.default13x13X,
          ratio * StoneMarkerData.default13x13Y
        );
      case GobanSize.small9x9:
        return new StoneMarkerData(
          ratio * StoneMarkerData.default9x9Radius,
          ratio * StoneMarkerData.default9x9DxDy,
          ratio * StoneMarkerData.default9x9X,
          ratio * StoneMarkerData.default9x9Y
        );
    }
  };
  private constructor(
    readonly radius: number = StoneMarkerData.default19x19RadiusDxDy,
    readonly dxdy: number = StoneMarkerData.default19x19RadiusDxDy,
    readonly x: number = StoneMarkerData.default19x19X,
    readonly y: number = StoneMarkerData.default19x19Y,
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

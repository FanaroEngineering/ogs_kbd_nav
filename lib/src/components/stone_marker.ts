export default class StoneMarker {
  constructor(
    private readonly data: StoneMarkerData = new StoneMarkerData()
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
      this.data.copyWithX(
        this.data.x + this.data.diameter + this.data.dxdy
      )
    );

  moveDown = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithY(
        this.data.y + this.data.diameter + this.data.dxdy
      )
    );

  moveLeft = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithX(
        this.data.x - this.data.diameter - this.data.dxdy
      )
    );

  moveUp = (): StoneMarker =>
    new StoneMarker(
      this.data.copyWithY(
        this.data.y - this.data.diameter - this.data.dxdy
      )
    );
}

export class StoneMarkerData {
  constructor(
    readonly x: number = 83.5,
    readonly y: number = 131.5,
    readonly radius: number = 8,
    readonly dxdy: number = 8
  ) {}

  get diameter(): number {
    return 2 * this.radius;
  }

  copyWithX = (newX: number) =>
    new StoneMarkerData(newX, this.y, this.radius, this.dxdy);

  copyWithY = (newY: number) =>
    new StoneMarkerData(this.x, newY, this.radius, this.dxdy);
}

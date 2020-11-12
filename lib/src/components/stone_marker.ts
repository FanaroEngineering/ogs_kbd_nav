export default class StoneMarker {
  constructor(readonly config: StoneMarkerData = new StoneMarkerData()) {}

  get radius(): number {
    return this.config.radius;
  }

  get x(): number {
    return this.config.x;
  }

  get y(): number {
    return this.config.y;
  }

  moveRight = (): StoneMarker =>
    new StoneMarker(
      this.config.copyWithX(
        this.config.x + this.config.diameter + this.config.dxdy
      )
    );

  moveDown = (): StoneMarker =>
    new StoneMarker(
      this.config.copyWithY(
        this.config.y + this.config.diameter + this.config.dxdy
      )
    );

  moveLeft = (): StoneMarker =>
    new StoneMarker(
      this.config.copyWithX(
        this.config.x - this.config.diameter - this.config.dxdy
      )
    );

  moveUp = (): StoneMarker =>
    new StoneMarker(
      this.config.copyWithY(
        this.config.y - this.config.diameter - this.config.dxdy
      )
    );
}

export class StoneMarkerData {
  constructor(
    public readonly x: number = 83.5,
    public readonly y: number = 131.5,
    public readonly radius: number = 8,
    public readonly dxdy: number = 8
  ) {}

  get diameter(): number {
    return 2 * this.radius;
  }

  copyWithX = (newX: number) =>
    new StoneMarkerData(newX, this.y, this.radius, this.dxdy);

  copyWithY = (newY: number) =>
    new StoneMarkerData(this.x, newY, this.radius, this.dxdy);
}

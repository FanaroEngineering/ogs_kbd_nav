export default class StoneMarker {
  static readonly radius: number = 8;
  private static readonly diameter: number = 2 * StoneMarker.radius;
  private static readonly extraDiff: number = 8;

  constructor(
    public readonly x: number = 83.5,
    public readonly y: number = 131.5
  ) {}

  moveRight = (): StoneMarker =>
    new StoneMarker(
      this.x + StoneMarker.diameter + StoneMarker.extraDiff,
      this.y
    );

  moveDown = (): StoneMarker =>
    new StoneMarker(
      this.x,
      this.y + StoneMarker.diameter + StoneMarker.extraDiff
    );

  moveLeft = (): StoneMarker =>
    new StoneMarker(
      this.x - StoneMarker.diameter - StoneMarker.extraDiff,
      this.y
    );

  moveUp = (): StoneMarker =>
    new StoneMarker(
      this.x,
      this.y - StoneMarker.diameter - StoneMarker.extraDiff
    );
}

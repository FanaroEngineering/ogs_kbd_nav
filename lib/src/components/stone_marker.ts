export default class StoneMarker {
  static radius: number = 8;
  private static diameter: number = 2 * StoneMarker.radius;
  private static extraDiff: number = 8;

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

export default class StoneMarker {
  static radius: number = 10;
  /**
   * The `diameter` will not be programmatically tied in order to avoid floating
   * points misalignments.
   */
  static diameter: number = 20;

  constructor(
    public readonly x: number = 100,
    public readonly y: number = 100
  ) {}

  moveRight(): StoneMarker {
    return new StoneMarker(this.x + StoneMarker.diameter, this.y);
  }

  moveDown(): StoneMarker {
    return new StoneMarker(this.x, this.y + StoneMarker.diameter);
  }

  moveLeft(): StoneMarker {
    return new StoneMarker(this.x - StoneMarker.diameter, this.y);
  }

  moveUp(): StoneMarker {
    return new StoneMarker(this.x, this.y - StoneMarker.diameter);
  }
}

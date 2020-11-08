export enum Direction {
  right,
  down,
  left,
  up,
}

export default class StoneMarker {
  static radius: number = 5;
  /**
   * The `diameter` will not be programmatically tied in order to avoid floating
   * points misalignments.
   */
  static diameter: number = 10;

  constructor(
    public readonly x: number = 100,
    public readonly y: number = 100
  ) {}

  move(direction: Direction): StoneMarker {
    switch (direction) {
      case Direction.right:
        return this.moveRight();
      case Direction.down:
        return this.moveDown();
      case Direction.left:
        return this.moveLeft();
      case Direction.up:
        return this.moveUp();
    }
  }

  private moveRight(): StoneMarker {
    return new StoneMarker(this.x + StoneMarker.diameter, this.y);
  }

  private moveDown(): StoneMarker {
    return new StoneMarker(this.x, this.y + StoneMarker.diameter);
  }

  private moveLeft(): StoneMarker {
    return new StoneMarker(this.x - StoneMarker.diameter, this.y);
  }

  private moveUp(): StoneMarker {
    return new StoneMarker(this.x, this.y - StoneMarker.diameter);
  }
}

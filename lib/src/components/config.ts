export enum GobanSize {
  small9x9,
  medium13x13,
  full19x19,
}

export default class Config {
  private constructor(
    private readonly _arrowKeysOn: boolean = false,
    private readonly _gobanSize: GobanSize = GobanSize.full19x19
  ) {}

  static default = (): Config => new Config();

  get arrowKeysOn(): boolean {
    return this._arrowKeysOn;
  }

  get gobanSize(): GobanSize {
    return this._gobanSize;
  }

  toggleArrowKeys = (): Config =>
    new Config(!this._arrowKeysOn, this._gobanSize);

  cycleSize = (): Config => {
    let nextSizeIndex: number;
    if (this._gobanSize == 2) nextSizeIndex = 0;
    else nextSizeIndex = this._gobanSize + 1;

    const nextSize: GobanSize = Object.values(GobanSize).indexOf(
      Object.values(GobanSize)[nextSizeIndex]
    );

    return new Config(this._arrowKeysOn, nextSize);
  };
}

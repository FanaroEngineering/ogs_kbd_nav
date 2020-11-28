export enum GobanSize {
  small9x9,
  medium13x13,
  full19x19,
}

export default class Config {
  private constructor(
    readonly globalSwitch: boolean = true,
    readonly arrowKeysOn: boolean = false,
    readonly gobanSize: GobanSize = GobanSize.full19x19
  ) {}

  static default = (): Config => new Config();

  toggleGlobalSwitch = (): Config =>
    new Config(!this.globalSwitch, this.arrowKeysOn, this.gobanSize);

  toggleArrowKeys = (): Config =>
    new Config(this.globalSwitch, !this.arrowKeysOn, this.gobanSize);

  cycleSize = (): Config => {
    let nextSizeIndex: number;
    if (this.gobanSize == 2) nextSizeIndex = 0;
    else nextSizeIndex = this.gobanSize + 1;

    const nextSize: GobanSize = Object.values(GobanSize).indexOf(
      Object.values(GobanSize)[nextSizeIndex]
    );

    return new Config(this.globalSwitch, this.arrowKeysOn, nextSize);
  };
}

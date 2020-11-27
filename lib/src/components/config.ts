export default class Config {
  private constructor(private readonly _arrowKeysOn: boolean = false) {}

  static default = (): Config => new Config();

  get arrowKeysOn(): boolean {
    return this._arrowKeysOn;
  }

  toggleArrowKeys = (): Config => new Config(!this._arrowKeysOn);
}

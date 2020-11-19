export default class CoordInputUi {
  private _coordinates: string = "";
  private coordInput: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  get coordinates(): string {
    return this._coordinates;
  }

  constructor() {
    const gobanDiv: HTMLDivElement = document.querySelector(
      "div.goban-container"
    ) as HTMLDivElement;

    this.style();
    this.builtInValidation();
    this.coordInput.onchange = this.onChange;

    gobanDiv.append(this.coordInput);
  }

  private style = (): void => {
    this.coordInput.id = "coordinates";
    this.coordInput.type = "text";
    this.coordInput.placeholder = "Coordinates";
    this.coordInput.size = this.coordInput.placeholder.length;
    this.coordInput.style.position = "absolute";
    this.coordInput.style.bottom = "0";
    this.coordInput.style.borderColor = "green";
  };

  private builtInValidation = (): void => {
    this.coordInput.minLength = 2;
    this.coordInput.maxLength = 3;
    this.coordInput.pattern = "[A-T|a-t][0-1]?[0-9]";
  };

  focus = (): void => this.coordInput.focus();

  get isFocused(): boolean {
    return document.activeElement == this.coordInput;
  }

  private onChange = (_: Event): any => {
    if (this.coordInput.validity.patternMismatch) {
      this.coordInput.setCustomValidity(
        `A coordinate is composed by 
         a letter from A to T (upper or lowercase) 
         and a number from 1 to 19.`
      );
    } else {
      this.coordInput.setCustomValidity("");
      this._coordinates = this.coordInput.value;
    }
  };
}

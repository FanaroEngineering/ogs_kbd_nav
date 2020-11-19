export default class CoordInputUi {
  private coordInput: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  constructor() {
    const gobanDiv: HTMLDivElement = document.querySelector(
      "div.goban-container"
    ) as HTMLDivElement;

    this.style();

    gobanDiv.append(this.coordInput);
  }

  private style = (): void => {
    this.coordInput.style.position = "absolute";
    this.coordInput.style.bottom = "0";
    this.coordInput.style.borderColor = "green";
  };

  focus = (): void => this.coordInput.focus();

  get isFocused(): boolean {
    return document.activeElement == this.coordInput;
  }
}

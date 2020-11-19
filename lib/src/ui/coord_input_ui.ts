export default class CoordInputUi {
  private coordInput: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  constructor() {
    const gobanDiv: HTMLDivElement = document.querySelector(
      "div.goban-container"
    ) as HTMLDivElement;

    this.coordInput.style.position = "absolute";
    this.coordInput.style.bottom = "0";
    this.coordInput.style.borderColor = "green";

    gobanDiv.append(this.coordInput);
  }

  focus = (): void => this.coordInput.focus();
}

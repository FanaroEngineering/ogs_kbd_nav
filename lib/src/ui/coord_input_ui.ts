import StoneMarker from "../components/stone_marker";

export default class CoordInputUi {
  private coordinates: string = "";
  private coordInput: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  private stoneMarker: StoneMarker = new StoneMarker();

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
      this.coordinates = this.coordInput.value;
      this.stoneMarker = StoneMarker.fromCoordinates(
        this.coordinates,
        this.ratio
      );
      this.click();
      this.coordInput.value = "";
    }
  };

  // TODO: this is basically a repetition of what's inside the `StoneMarkerUi`.
  private get ratio(): number {
    const gameCanvasQuery: string = "div.Goban > div > canvas#board-canvas";
    const gameCanvas: HTMLCanvasElement = document.querySelector(
      gameCanvasQuery
    ) as HTMLCanvasElement;

    return gameCanvas.width / 504;
  }

  // TODO: this is basically a repetition of what's inside the `StoneMarkerUi`.
  private click = (): void => {
    const gameCanvasQuery: string = "div.Goban > div > canvas#board-canvas";
    const gameCanvas: HTMLCanvasElement = document.querySelector(
      gameCanvasQuery
    ) as HTMLCanvasElement;

    const clickEvent: MouseEvent = document.createEvent("MouseEvent");
    const topOffset: number = gameCanvas.getBoundingClientRect().top;
    const leftOffset: number = gameCanvas.getBoundingClientRect().left;

    clickEvent.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      this.stoneMarker.x + leftOffset,
      this.stoneMarker.y + topOffset,
      false,
      false,
      false,
      false,
      0,
      null
    );

    gameCanvas.dispatchEvent(clickEvent);
  };
}

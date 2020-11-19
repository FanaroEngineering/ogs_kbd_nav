import CoordInputUi from "../ui/coord_input_ui";
import StoneMarkerUi, { Direction } from "../ui/stone_marker_ui";
import AiReview from "./ai_review";
import Chat from "./chat";
import PassButton from "./pass";

export default class Kbd {
  private readonly chat: Chat = new Chat();
  private readonly passButton: PassButton = new PassButton();
  private readonly aiReview: AiReview = new AiReview();
  private kbdEvt: KeyboardEvent = new KeyboardEvent("keypress");
  private stoneMarkerUi: StoneMarkerUi | null = null;
  private coordInputUi: CoordInputUi | null = null;

  constructor() {
    window.onload = this.onLoad;
    window.onresize = this.onResize;
    document.onkeydown = this.onKeydown;
  }

  private onLoad = (_: Event) => {
    const checkExist: NodeJS.Timeout = setInterval(() => {
      if (document.querySelector(StoneMarkerUi.shadowCanvasQuery) !== null) {
        this.stoneMarkerUi = new StoneMarkerUi();
        this.coordInputUi = new CoordInputUi();
        clearInterval(checkExist);
      }
    }, 100);
  };

  private onResize = (_: UIEvent) => {
    if (this.stoneMarkerUi?.canvasOn) this.stoneMarkerUi?.toggleCanvas();
    this.stoneMarkerUi = new StoneMarkerUi();
    this.stoneMarkerUi?.toggleCanvas();
  };

  private onKeydown = (evt: KeyboardEvent) => {
    this.kbdEvt = evt;
    this.keySwitch();
  };

  private toggleCanvas = (): void => {
    if (this.kbdEvt.ctrlKey) this.stoneMarkerUi?.toggleCanvas();
  };

  private toggleChatInput = (): void => {
    if (this.kbdEvt.ctrlKey) this.chat.toggleChatInput();
  };

  private pass = (): void => {
    if (this.kbdEvt.shiftKey) this.passButton.click();
  };

  private toggleAiReview = (): void => {
    if (this.kbdEvt.ctrlKey) this.aiReview.toggle();
  };

  private focusCoordInput = (): void => this.coordInputUi?.focus();

  private keySwitch = (): void => {
    switch (this.kbdEvt.key) {
      case "b":
        this.toggleCanvas();
        break;
      case "m":
        this.toggleChatInput();
        break;
      case "p":
        this.pass();
        break;
      case ";":
        this.toggleAiReview();
        break;
      case ".":
        this.focusCoordInput();
        break;
      case "d":
        this.moveRight();
        break;
      case "ArrowRight":
        this.moveRight();
        break;
      case "s":
        this.moveDown();
        break;
      case "ArrowDown":
        this.moveDown();
        break;
      case "a":
        this.moveLeft();
        break;
      case "ArrowLeft":
        this.moveLeft();
        break;
      case "w":
        this.moveUp();
        break;
      case "ArrowUp":
        this.moveUp();
        break;
      case "Enter":
        this.play();
        break;
      case "f":
        this.play();
        break;
    }
  };

  private get anInputIsFocused(): boolean {
    return !this.chat.isFocused && !this.coordInputUi?.isFocused;
  }

  private moveRight = (): void => {
    if (this.anInputIsFocused) this.stoneMarkerUi?.move(Direction.right);
  };

  private moveDown = (): void => {
    if (this.anInputIsFocused) this.stoneMarkerUi?.move(Direction.down);
  };

  private moveLeft = (): void => {
    if (this.anInputIsFocused) {
      this.skipAnalysis();
      this.stoneMarkerUi?.move(Direction.left);
    }
  };

  private skipAnalysis = (): void => {
    const backToGameButtonQuery: string =
      "div.analyze-mode-buttons > span > button";
    const backToGameButton: HTMLButtonElement = document.querySelector(
      backToGameButtonQuery
    ) as HTMLButtonElement;
    backToGameButton?.click();
  };

  private moveUp = (): void => {
    if (this.anInputIsFocused) this.stoneMarkerUi?.move(Direction.up);
  };

  private play = (): void => {
    if (this.anInputIsFocused) this.stoneMarkerUi?.click();
  };
}

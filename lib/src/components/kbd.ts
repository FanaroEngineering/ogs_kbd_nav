import { Direction } from "../ui/stone_marker_ui";
import Ui from "../ui/ui";
import Config from "./config";

export default class Kbd {
  private kbdEvt: KeyboardEvent = new KeyboardEvent("keypress");
  private config: Config = Config.default();
  private ui: Ui = new Ui();

  constructor() {
    document.onkeydown = this.onKeydown;
  }

  private onKeydown = (evt: KeyboardEvent) => {
    this.kbdEvt = evt;
    this.globalSwitch();
  };

  private globalSwitch = (): void => {
    switch (this.kbdEvt.key) {
      case "\\":
        this.globalToggle();
        break;
      default:
        if (this.config.globalSwitch) this.keySwitch();
    }
  };

  private globalToggle = (): void => {
    if (this.kbdEvt.ctrlKey) {
      this.config = this.config.toggleGlobalSwitch();
      this.ui.stoneMarkerUi?.toggleCanvas();
    }
  };

  private toggleCanvas = (): void => {
    if (this.kbdEvt.ctrlKey) this.ui.stoneMarkerUi?.toggleCanvas();
  };

  private toggleChatInput = (): void => {
    if (this.kbdEvt.ctrlKey) this.ui.chat.toggleChatInput();
  };

  private pass = (): void => {
    if (this.kbdEvt.ctrlKey) this.ui.passButton.click();
  };

  private toggleAiReview = (): void => {
    if (this.kbdEvt.ctrlKey) this.ui.aiReview.toggle();
  };

  private toggleCoordInput = (): void => this.ui.coordInputUi?.toggle();

  private toggleArrowKeys = (): void => {
    this.config = this.config.toggleArrowKeys();
  };

  private keySwitch = (): void => {
    switch (this.kbdEvt.key) {
      case "b":
        this.toggleCanvas();
        break;
      case "m":
        this.toggleChatInput();
        break;
      case "[":
        this.pass();
        break;
      case "]":
        this.toggleArrowKeys();
        break;
      case ";":
        this.toggleAiReview();
        break;
      case ".":
        this.toggleCoordInput();
        break;
      case "d":
        this.moveRight();
        break;
      case "ArrowRight":
        if (this.config.arrowKeysOn) this.moveRight();
        break;
      case "s":
        this.moveDown();
        break;
      case "ArrowDown":
        if (this.config.arrowKeysOn) this.moveDown();
        break;
      case "a":
        this.moveLeft();
        break;
      case "ArrowLeft":
        if (this.config.arrowKeysOn) this.moveLeft();
        break;
      case "w":
        this.moveUp();
        break;
      case "ArrowUp":
        if (this.config.arrowKeysOn) this.moveUp();
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
    return !this.ui.chat.isFocused && !this.ui.coordInputUi?.isFocused;
  }

  private moveRight = (): void => {
    if (this.anInputIsFocused) this.ui.stoneMarkerUi?.move(Direction.right);
  };

  private moveDown = (): void => {
    if (this.anInputIsFocused) this.ui.stoneMarkerUi?.move(Direction.down);
  };

  private moveLeft = (): void => {
    if (this.anInputIsFocused) {
      this.skipAnalysis();
      this.ui.stoneMarkerUi?.move(Direction.left);
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
    if (this.anInputIsFocused) this.ui.stoneMarkerUi?.move(Direction.up);
  };

  private play = (): void => {
    if (this.anInputIsFocused) this.ui.stoneMarkerUi?.click();
  };
}

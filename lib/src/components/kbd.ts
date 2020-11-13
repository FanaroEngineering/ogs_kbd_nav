import Chat from "./chat";
import StoneMarkerUi, { Direction } from "../ui/stone_marker_ui";

export default class Kbd {
  private kbdEvt: KeyboardEvent = new KeyboardEvent("keypress");
  private readonly chat: Chat = new Chat();
  private stoneMarkerUi: StoneMarkerUi | null = null;

  constructor() {
    window.onload = this.onload;
    document.onkeydown = this.onkeydown;
  }

  private onload = (_: Event) => {
    const checkExist: NodeJS.Timeout = setInterval(() => {
      if (document.querySelector(StoneMarkerUi.shadowCanvasQuery) !== null) {
        this.stoneMarkerUi = new StoneMarkerUi();
        clearInterval(checkExist);
      }
    }, 100);
  };

  private onkeydown = (evt: KeyboardEvent) => {
    this.kbdEvt = evt;
    this.keySwitch();
  };

  private keySwitch = (): void => {
    switch (this.kbdEvt.key) {
      case "b":
        this.toggleCanvas();
        break;
      case "m":
        this.toggleChatInput();
        break;
      case "ArrowRight":
        this.stoneMarkerUi?.move(Direction.right);
        break;
      case "ArrowDown":
        this.stoneMarkerUi?.move(Direction.down);
        break;
      case "ArrowLeft":
        this.stoneMarkerUi?.move(Direction.left);
        break;
      case "ArrowUp":
        this.stoneMarkerUi?.move(Direction.up);
        break;
      case "Enter":
        this.stoneMarkerUi?.click();
        break;
    }
  };

  private toggleCanvas = (): void => {
    if (this.kbdEvt.ctrlKey === true) this.stoneMarkerUi?.toggleCanvas();
  };

  private toggleChatInput = (): void => {
    if (this.kbdEvt.ctrlKey === true) this.chat.toggleChatInput();
  };
}

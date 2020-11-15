import Chat from "./chat";
import PassButton from "./pass";
import StoneMarkerUi, { Direction } from "../ui/stone_marker_ui";

export default class Kbd {
  private readonly chat: Chat = new Chat();
  private readonly passButton: PassButton = new PassButton();
  private kbdEvt: KeyboardEvent = new KeyboardEvent("keypress");
  private stoneMarkerUi: StoneMarkerUi | null = null;

  constructor() {
    window.onload = this.onLoad;
    window.onresize = this.onResize;
    document.onkeydown = this.onKeydown;
  }

  private onLoad = (_: Event) => {
    const checkExist: NodeJS.Timeout = setInterval(() => {
      if (document.querySelector(StoneMarkerUi.shadowCanvasQuery) !== null) {
        this.stoneMarkerUi = new StoneMarkerUi();
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

  private keySwitch = (): void => {
    switch (this.kbdEvt.key) {
      case "b":
        this.toggleCanvas();
        break;
      case "m":
        this.toggleChatInput();
        break;
      case "d":
        this.stoneMarkerUi?.move(Direction.right);
        break;
      case "s":
        this.stoneMarkerUi?.move(Direction.down);
        break;
      case "a":
        this.stoneMarkerUi?.move(Direction.left);
        break;
      case "w":
        this.stoneMarkerUi?.move(Direction.up);
        break;
      case "Enter":
        this.stoneMarkerUi?.click();
        break;
      case "p":
        this.passButton.click();
    }
  };

  private toggleCanvas = (): void => {
    if (this.kbdEvt.ctrlKey) this.stoneMarkerUi?.toggleCanvas();
  };

  private toggleChatInput = (): void => {
    if (this.kbdEvt.ctrlKey) this.chat.toggleChatInput();
  };
}

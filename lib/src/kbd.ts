import Chat from "./chat";
import StoneMarker from "./stone_marker";

export default class Kbd {
  private kbdEvt: KeyboardEvent;
  private readonly chat: Chat = new Chat();
  private readonly stoneMarker: StoneMarker = new StoneMarker();

  constructor() {
    this.kbdEvt = new KeyboardEvent("keypress");
    document.onkeydown = (evt: KeyboardEvent) => {
      this.kbdEvt = evt;
      this.keySwitch();
    };
  }

  private keySwitch(): void {
    switch (this.kbdEvt.key) {
      case "m":
        this.toggleChatInput();
        break;
      case "ArrowRight":
        this.stoneMarker.moveRight();
        break;
      case "ArrowDown":
        this.stoneMarker.moveDown();
        break;
      case "ArrowLeft":
        this.stoneMarker.moveLeft();
        break;
      case "ArrowUp":
        this.stoneMarker.moveUp();
        break;
    }
  }

  private toggleChatInput(): void {
    if (this.kbdEvt.ctrlKey) this.chat.toggleChatInput();
  }
}

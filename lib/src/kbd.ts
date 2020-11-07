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
      case "Right":
        this.stoneMarker.moveRight();
        break;
      case "Down":
        this.stoneMarker.moveDown();
        break;
      case "Left":
        this.stoneMarker.moveLeft();
        break;
      case "Up":
        this.stoneMarker.moveUp();
        break;
    }
  }

  private toggleChatInput(): void {
    if (this.kbdEvt.ctrlKey) this.chat.toggleChatInput();
  }
}

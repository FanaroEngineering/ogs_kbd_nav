import Chat from "./components/chat";
import StoneMarker, { Direction } from "./components/stone_marker";

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
        this.stoneMarker.move(Direction.right);
        break;
      case "ArrowDown":
        this.stoneMarker.move(Direction.down);
        break;
      case "ArrowLeft":
        this.stoneMarker.move(Direction.left);
        break;
      case "ArrowUp":
        this.stoneMarker.move(Direction.up);
        break;
    }
  }

  private toggleChatInput(): void {
    if (this.kbdEvt.ctrlKey) this.chat.toggleChatInput();
  }
}

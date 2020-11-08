import Chat from "./components/chat";
import StoneMarkerUi, { Direction } from "./ui/stone_marker_ui";

export default class Kbd {
  private kbdEvt: KeyboardEvent;
  private readonly chat: Chat = new Chat();
  private stoneMarkerUi: StoneMarkerUi | null = null;

  constructor() {
    this.kbdEvt = new KeyboardEvent("keypress");
    window.onload = (_: Event) => {
      console.log('loaded');
      this.stoneMarkerUi = new StoneMarkerUi();
    };
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
    }
  }

  private toggleChatInput(): void {
    if (this.kbdEvt.ctrlKey) this.chat.toggleChatInput();
  }
}

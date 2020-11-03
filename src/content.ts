class Kbd {
  private kbdEvt: KeyboardEvent;

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
    }
  }

  private toggleChatInput(): void {
    const chatInputQuery: string = "div.chat-container > div > input.main";
    const chatInput: HTMLInputElement = document.querySelector(
      chatInputQuery
    ) as HTMLInputElement;

    if (this.kbdEvt.ctrlKey) {
      document.activeElement == chatInput
        ? chatInput?.blur()
        : chatInput?.focus();
    }
  }
}

const kbd: Kbd = new Kbd();

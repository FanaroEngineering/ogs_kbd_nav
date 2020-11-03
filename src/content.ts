class KbddEvtHandler {
  private kbdEvt: KeyboardEvent;

  constructor() {
    this.kbdEvt = new KeyboardEvent("keypress");
    document.onkeydown = (evt: KeyboardEvent) => {
      this.kbdEvt = evt;
      this._keySwitch();
    };
  }

  _keySwitch(): void {
    switch (this.kbdEvt.key) {
      case "m":
        this._toggleChatInput();
        break;
    }
  }

  _toggleChatInput(): void {
    const chatInputQuery: string = "div.chat-container > div > input.main";
    const chatInput: HTMLInputElement = document.querySelector(
      chatInputQuery
    ) as HTMLInputElement;

    if (this.kbdEvt.ctrlKey) {
      document.activeElement == chatInput
        ? chatInput.blur()
        : chatInput.focus();
    }
  }
}

const kbddEvtHandler = new KbddEvtHandler();

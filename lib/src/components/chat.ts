export default class Chat {
  private static readonly chatInputQuery: string =
    "div.chat-container > div > input.main";

  private get chatInput(): HTMLInputElement {
    return document.querySelector(Chat.chatInputQuery) as HTMLInputElement;
  }

  toggleChatInput = (): void =>
    document.activeElement == this.chatInput
      ? this.chatInput?.blur()
      : this.chatInput?.focus();

  get isFocused(): boolean {
    return document.activeElement == this.chatInput;
  }
}

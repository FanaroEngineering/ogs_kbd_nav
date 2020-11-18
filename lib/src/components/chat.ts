export default class Chat {
  private static readonly chatInputQuery: string =
    "div.chat-container > div > input.main";

  toggleChatInput = (): void => {
    const chatInput: HTMLInputElement = document.querySelector(
      Chat.chatInputQuery
    ) as HTMLInputElement;

    document.activeElement == chatInput
      ? chatInput?.blur()
      : chatInput?.focus();
  };
}

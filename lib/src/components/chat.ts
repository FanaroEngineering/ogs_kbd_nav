export default class Chat {
  toggleChatInput = (): void => {
    const chatInputQuery: string = "div.chat-container > div > input.main";
    const chatInput: HTMLInputElement = document.querySelector(
      chatInputQuery
    ) as HTMLInputElement;

    document.activeElement == chatInput
      ? chatInput?.blur()
      : chatInput?.focus();
  };
}

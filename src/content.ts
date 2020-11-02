const chatInputQuery: string = 'div.chat-container > div > input.main';

const chatInput: HTMLInputElement = document.querySelector(
  chatInputQuery
) as HTMLInputElement;

document.onkeydown = (evt: KeyboardEvent) => {
  console.log(evt.key);
  console.log('here');
};
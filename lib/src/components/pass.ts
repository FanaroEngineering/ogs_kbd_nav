export default class PassButton {
  click = (): void => {
    const passButtonQuery: string = "button.pass-button";
    const passButton: HTMLButtonElement = document.querySelector(
      passButtonQuery
    ) as HTMLButtonElement;
    passButton.click();
  };
}

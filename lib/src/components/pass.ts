export default class PassButton {
  private static readonly passButtonQuery: string = "button.pass-button";

  click = (): void => {
    const passButton: HTMLButtonElement = document.querySelector(
      PassButton.passButtonQuery
    ) as HTMLButtonElement;
    passButton?.click();
  };
}

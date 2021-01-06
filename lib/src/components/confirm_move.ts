export default class ConfirmMoveButton {
  click = (): void => {
    const submitButton: HTMLButtonElement | null = document.querySelector(
      "button#game-submit-move"
    );
    submitButton?.click();
  };
}

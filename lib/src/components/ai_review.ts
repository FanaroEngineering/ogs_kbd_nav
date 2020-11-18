export default class AiReview {
  private static readonly aiReviewQuery = "div.Dock > a > i.fa-desktop";

  toggle = (): void => {
    const aiReviewButton: HTMLLIElement = document.querySelector(
      AiReview.aiReviewQuery
    ) as HTMLLIElement;

    aiReviewButton.click();
  };
}

import AiReview from "../components/ai_review";
import Chat from "../components/chat";
import ConfirmMoveButton from "../components/confirm_move";
import Logo from "../components/logo";
import PassButton from "../components/pass";
import CoordInputUi from "./coord_input_ui";
import StoneMarkerUi from "./stone_marker_ui";

export default class Ui {
  readonly chat: Chat = new Chat();
  readonly passButton: PassButton = new PassButton();
  readonly aiReview: AiReview = new AiReview();
  readonly logo: Logo = new Logo();
  readonly confirmMove: ConfirmMoveButton = new ConfirmMoveButton();
  stoneMarkerUi: StoneMarkerUi | null = null;
  coordInputUi: CoordInputUi | null = null;

  constructor() {
    window.onload = this.onLoad;
    window.onresize = this.onResize
  }

  private onLoad = (_: Event) => {
    const checkExist: NodeJS.Timeout = setInterval(() => {
      if (document.querySelector(StoneMarkerUi.shadowCanvasQuery) != null) {
        this.stoneMarkerUi = new StoneMarkerUi();
        this.coordInputUi = new CoordInputUi();
        clearInterval(checkExist);
      }
    }, 100);
  };

  private onResize = (_: UIEvent) => {
    if (this.stoneMarkerUi?.canvasOn) this.stoneMarkerUi?.toggleCanvas();
    this.stoneMarkerUi = new StoneMarkerUi();
    this.stoneMarkerUi?.toggleCanvas();
  };
}
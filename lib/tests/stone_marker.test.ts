import StoneMarker from "../src/stone_marker";

test("The stone marker is initialized with (100, 100) as coordinates", () => {
  expect(new StoneMarker().x).toBe(100);
  expect(new StoneMarker().y).toBe(100);
});

test("Moving to the right changes the initial coordinates to be (110, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  stoneMarker.moveRight();

  expect(stoneMarker.x).toBe(110);
  expect(stoneMarker.y).toBe(100);
})
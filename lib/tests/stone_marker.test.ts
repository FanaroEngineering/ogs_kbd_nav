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
});

test("Moving downwards changes the initial coordinates to be (100, 110)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  stoneMarker.moveDown();

  expect(stoneMarker.x).toBe(100);
  expect(stoneMarker.y).toBe(110);
});

test("Moving to the left changes the initial coordinates to be (90, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  stoneMarker.moveLeft();

  expect(stoneMarker.x).toBe(90);
  expect(stoneMarker.y).toBe(100);
});

test("Moving upwards changes the initial coordinates to be (100, 90)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  stoneMarker.moveUp();

  expect(stoneMarker.x).toBe(100);
  expect(stoneMarker.y).toBe(90);
});

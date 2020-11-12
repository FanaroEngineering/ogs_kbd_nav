import StoneMarker from "../../src/components/stone_marker";

test("The stone marker is initialized with (100, 100) as coordinates", () => {
  expect(new StoneMarker().x).toBe(83.5);
  expect(new StoneMarker().y).toBe(131.5);
});

test("Moving to the right changes the initial coordinates to be (120, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveRight();

  expect(stoneMarker.x).toBe(83.5);
  expect(stoneMarker.y).toBe(131.5);
  expect(movedStoneMarker.x).toBe(107.5);
  expect(movedStoneMarker.y).toBe(131.5);
});

test("Moving downwards changes the initial coordinates to be (100, 120)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveDown();

  expect(stoneMarker.x).toBe(83.5);
  expect(stoneMarker.y).toBe(131.5);
  expect(movedStoneMarker.x).toBe(83.5);
  expect(movedStoneMarker.y).toBe(155.5);
});

test("Moving to the left changes the initial coordinates to be (80, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveLeft();

  expect(stoneMarker.x).toBe(83.5);
  expect(stoneMarker.y).toBe(131.5);
  expect(movedStoneMarker.x).toBe(59.5);
  expect(movedStoneMarker.y).toBe(131.5);
});

test("Moving upwards changes the initial coordinates to be (100, 80)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveUp();

  expect(stoneMarker.x).toBe(83.5);
  expect(stoneMarker.y).toBe(131.5);
  expect(movedStoneMarker.x).toBe(83.5);
  expect(movedStoneMarker.y).toBe(107.5);
});

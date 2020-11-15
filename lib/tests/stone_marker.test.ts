import StoneMarker from "../src/components/stone_marker";

test("The stone marker is initialized with (100, 100) as coordinates", () => {
  expect(new StoneMarker().x).toBe(35.75);
  expect(new StoneMarker().y).toBe(35.75);
  expect(new StoneMarker().radius).toBe(8);
});

test("Moving to the right changes the initial coordinates to be (120, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveRight();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(35.75);
  expect(movedStoneMarker.x).toBe(59.75);
  expect(movedStoneMarker.y).toBe(35.75);
});

test("Moving downwards changes the initial coordinates to be (100, 120)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveDown();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(35.75);
  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(59.75);
});

test("Moving to the left changes the initial coordinates to be (80, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveLeft();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(35.75);
  expect(movedStoneMarker.x).toBe(11.75);
  expect(movedStoneMarker.y).toBe(35.75);
});

test("Moving upwards changes the initial coordinates to be (100, 80)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveUp();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(35.75);
  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(11.75);
});

test("Changing the ratio changes the proportions and position of the stone marker", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const changedStoneMarker: StoneMarker = StoneMarker.changeRatio(2);

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(35.75);
  expect(stoneMarker.radius).toBe(8);
  expect(changedStoneMarker.x).toBe(71.5);
  expect(changedStoneMarker.y).toBe(71.5);
  expect(changedStoneMarker.radius).toBe(16);
});

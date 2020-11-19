import StoneMarker from "../src/components/stone_marker";

test("The stone marker is initialized with (35.75, 467.75) as coordinates", () => {
  expect(new StoneMarker().x).toBe(35.75);
  expect(new StoneMarker().y).toBe(467.75);
  expect(new StoneMarker().radius).toBe(8);
});

test("Moving to the right changes the initial coordinates to be (59.75, 467.75)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveRight();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(467.75);
  expect(movedStoneMarker.x).toBe(59.75);
  expect(movedStoneMarker.y).toBe(467.75);
});

test("Testing the right edge boundary", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  let movedStoneMarker: StoneMarker = stoneMarker;
  for (let i = 0; i < 25; i++) movedStoneMarker = movedStoneMarker.moveRight();

  expect(movedStoneMarker.x).toBe(467.75);
  expect(movedStoneMarker.y).toBe(467.75);
});

test("Moving upwards and downwards doesn't change initial coordinates to be (35.75, 467.75)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.moveDown();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(467.75);
  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(467.75);
});

test("Testing the lower edge boundary", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  let movedStoneMarker: StoneMarker = stoneMarker;
  for (let i = 0; i < 25; i++) movedStoneMarker = movedStoneMarker.moveDown();

  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(467.75);
});

test("Moving to the right and left changes the initial coordinates to be (35.75, 467.75)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const interStoneMarker: StoneMarker = stoneMarker.moveRight();
  const movedStoneMarker: StoneMarker = interStoneMarker.moveLeft();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(467.75);
  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(467.75);
});

test("Testing the left edge boundary", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  let movedStoneMarker: StoneMarker = stoneMarker;
  for (let i = 0; i < 25; i++) movedStoneMarker = movedStoneMarker.moveLeft();

  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(467.75);
});

test("Moving downwards and upwards changes the initial coordinates to be (35.75, 35.75)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const interStoneMarker: StoneMarker = stoneMarker.moveDown();
  const movedStoneMarker: StoneMarker = interStoneMarker.moveUp();

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(467.75);
  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(443.75);
});

test("Testing the top edge boundary", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  let movedStoneMarker: StoneMarker = stoneMarker;
  for (let i = 0; i < 25; i++) movedStoneMarker = movedStoneMarker.moveUp();

  expect(movedStoneMarker.x).toBe(35.75);
  expect(movedStoneMarker.y).toBe(35.75);
});

test("Changing the ratio changes the proportions and position of the stone marker", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const changedStoneMarker: StoneMarker = StoneMarker.changeRatio(2);

  expect(stoneMarker.x).toBe(35.75);
  expect(stoneMarker.y).toBe(467.75);
  expect(stoneMarker.radius).toBe(8);
  expect(changedStoneMarker.x).toBe(71.5);
  expect(changedStoneMarker.y).toBe(935.5);
  expect(changedStoneMarker.radius).toBe(16);
});

test("Goban coordinates as numerical coordinates", () => {
  const stoneMarker: StoneMarker = StoneMarker.fromCoordinates("c11");

  expect(stoneMarker.x).toBe(35.75 + 2 * 3 * 8);
  expect(stoneMarker.y).toBe(467.75 - 10 * 3 * 8);
});

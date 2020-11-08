import StoneMarker, { Direction } from "../src/components/stone_marker";

test("The stone marker is initialized with (100, 100) as coordinates", () => {
  expect(new StoneMarker().x).toBe(100);
  expect(new StoneMarker().y).toBe(100);
});

test("Moving to the right changes the initial coordinates to be (110, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.move(Direction.right);

  expect(stoneMarker.x).toBe(100);
  expect(stoneMarker.y).toBe(100);
  expect(movedStoneMarker.x).toBe(110);
  expect(movedStoneMarker.y).toBe(100);
});

test("Moving downwards changes the initial coordinates to be (100, 110)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.move(Direction.down);
  
  expect(stoneMarker.x).toBe(100);
  expect(stoneMarker.y).toBe(100);
  expect(movedStoneMarker.x).toBe(100);
  expect(movedStoneMarker.y).toBe(110);
});

test("Moving to the left changes the initial coordinates to be (90, 100)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.move(Direction.left);
  
  expect(stoneMarker.x).toBe(100);
  expect(stoneMarker.y).toBe(100);
  expect(movedStoneMarker.x).toBe(90);
  expect(movedStoneMarker.y).toBe(100); 
});

test("Moving upwards changes the initial coordinates to be (100, 90)", () => {
  const stoneMarker: StoneMarker = new StoneMarker();
  const movedStoneMarker: StoneMarker = stoneMarker.move(Direction.up);
  
  expect(stoneMarker.x).toBe(100);
  expect(stoneMarker.y).toBe(100);
  expect(movedStoneMarker.x).toBe(100);
  expect(movedStoneMarker.y).toBe(90);
});

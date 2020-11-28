import { GobanSize } from "../src/components/config";
import { StoneMarkerData } from "../src/components/stone_marker";

test("The diameter of the config should be double the radius", () => {
  expect(StoneMarkerData.default().diameter).toBe(16);
});

test("copyWithX only changes X", () => {
  const copiedStoneMarkerConfig: StoneMarkerData = StoneMarkerData.default().copyWithX(
    1000,
    2
  );

  expect(copiedStoneMarkerConfig.x).toBe(1000);
  expect(copiedStoneMarkerConfig.y).toBe(467.75);
  expect(copiedStoneMarkerConfig.radius).toBe(8);
  expect(copiedStoneMarkerConfig.dxdy).toBe(8);
  expect(copiedStoneMarkerConfig.gobanX).toBe(2);
  expect(copiedStoneMarkerConfig.gobanY).toBe(1);
});

test("copyWithY only changes Y", () => {
  const copiedStoneMarkerConfig: StoneMarkerData = StoneMarkerData.default().copyWithY(
    1000,
    2
  );

  expect(copiedStoneMarkerConfig.x).toBe(35.75);
  expect(copiedStoneMarkerConfig.y).toBe(1000);
  expect(copiedStoneMarkerConfig.radius).toBe(8);
  expect(copiedStoneMarkerConfig.dxdy).toBe(8);
  expect(copiedStoneMarkerConfig.gobanX).toBe(1);
  expect(copiedStoneMarkerConfig.gobanY).toBe(2);
});

test("fromRatio gives back new stone marker data that only multiplies the default", () => {
  const doubledStoneMarkerData: StoneMarkerData = StoneMarkerData.fromRatio(2);

  expect(doubledStoneMarkerData.x).toBe(2 * 35.75);
  expect(doubledStoneMarkerData.y).toBe(2 * 467.75);
  expect(doubledStoneMarkerData.radius).toBe(2 * 8);
  expect(doubledStoneMarkerData.dxdy).toBe(2 * 8);
  expect(doubledStoneMarkerData.gobanX).toBe(1);
  expect(doubledStoneMarkerData.gobanY).toBe(1);
});

test("Medium, 13x13, goban size", () => {
  const mediumGobanInitialData: StoneMarkerData = StoneMarkerData.default(
    GobanSize.medium13x13
  );

  expect(mediumGobanInitialData.x).toBe(50.525);
  expect(mediumGobanInitialData.y).toBe(453.65);
  expect(mediumGobanInitialData.radius).toBe(11);
  expect(mediumGobanInitialData.dxdy).toBe(11.5875);
  expect(mediumGobanInitialData.gobanX).toBe(1);
  expect(mediumGobanInitialData.gobanY).toBe(1);
});

test("Small, 9x9, goban size", () => {
  const smallGobanInitialData: StoneMarkerData = StoneMarkerData.default(
    GobanSize.small9x9
  );

  expect(smallGobanInitialData.x).toBe(68.5);
  expect(smallGobanInitialData.y).toBe(435);
  expect(smallGobanInitialData.radius).toBe(14);
  expect(smallGobanInitialData.dxdy).toBe(17.8);
  expect(smallGobanInitialData.gobanX).toBe(1);
  expect(smallGobanInitialData.gobanY).toBe(1);
});

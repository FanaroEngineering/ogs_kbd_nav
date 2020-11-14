import { StoneMarkerData } from "../src/components/stone_marker";

test("The diameter of the config should be double the radius", () => {
  expect(StoneMarkerData.default().diameter).toBe(16);
});

test("copyWithX only changes X", () => {
  const copiedStoneMarkerConfig: StoneMarkerData = StoneMarkerData.default().copyWithX(
    1000
  );

  expect(copiedStoneMarkerConfig.x).toBe(1000);
  expect(copiedStoneMarkerConfig.y).toBe(131.75);
  expect(copiedStoneMarkerConfig.radius).toBe(8);
  expect(copiedStoneMarkerConfig.dxdy).toBe(8);
});

test("copyWithY only changes Y", () => {
  const copiedStoneMarkerConfig: StoneMarkerData = StoneMarkerData.default().copyWithY(
    1000
  );

  expect(copiedStoneMarkerConfig.x).toBe(83.75);
  expect(copiedStoneMarkerConfig.y).toBe(1000);
  expect(copiedStoneMarkerConfig.radius).toBe(8);
  expect(copiedStoneMarkerConfig.dxdy).toBe(8);
});

test("fromRatio gives back new stone marker data that only multiplies the default", () => {
  const doubledStoneMarkerData: StoneMarkerData = StoneMarkerData.fromRatio(2);

  expect(doubledStoneMarkerData.x).toBe(2 * 83.75);
  expect(doubledStoneMarkerData.y).toBe(2 * 131.75);
  expect(doubledStoneMarkerData.radius).toBe(2 * 8);
  expect(doubledStoneMarkerData.dxdy).toBe(2 * 8);
});

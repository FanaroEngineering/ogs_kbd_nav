import { StoneMarkerData } from "../../src/components/stone_marker";

test("The diameter of the config should be double the radius", () => {
  expect(new StoneMarkerData().diameter).toBe(16);
});

test("copyWithX only changes X", () => {
  const copiedStoneMarkerConfig: StoneMarkerData = new StoneMarkerData().copyWithX(
    1000
  );

  expect(copiedStoneMarkerConfig.x).toBe(1000);
  expect(copiedStoneMarkerConfig.y).toBe(131.5);
  expect(copiedStoneMarkerConfig.radius).toBe(8);
  expect(copiedStoneMarkerConfig.dxdy).toBe(8);
});

test("copyWithY only changes Y", () => {
  const copiedStoneMarkerConfig: StoneMarkerData = new StoneMarkerData().copyWithY(
    1000
  );

  expect(copiedStoneMarkerConfig.x).toBe(83.5);
  expect(copiedStoneMarkerConfig.y).toBe(1000);
  expect(copiedStoneMarkerConfig.radius).toBe(8);
  expect(copiedStoneMarkerConfig.dxdy).toBe(8);
});

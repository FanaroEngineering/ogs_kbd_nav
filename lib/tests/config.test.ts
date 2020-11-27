import Config from "../src/components/config";

test("Initially Config.arrowKeysOn is false", () => {
  const config: Config = Config.default();

  expect(config.arrowKeysOn).toBe(false);
});

test("Toggling the arrow keys", () => {
  const config: Config = Config.default();

  expect(config.arrowKeysOn).toBe(false);

  const toggledConfig: Config = config.toggleArrowKeys();

  expect(toggledConfig.arrowKeysOn).toBe(true);
});

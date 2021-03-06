import Config, { GobanSize } from "../src/components/config";

test("Initially Configs", () => {
  const config: Config = Config.default();

  expect(config.globalSwitch).toBe(true);
  expect(config.arrowKeysOn).toBe(false);
  expect(config.gobanSize).toBe(GobanSize.full19x19);
});

test("Toggling the global switch", () => {
  const config: Config = Config.default();

  expect(config.globalSwitch).toBe(true);

  const toggledConfig: Config = config.toggleGlobalSwitch();

  expect(toggledConfig.globalSwitch).toBe(false);
  expect(toggledConfig.arrowKeysOn).toBe(false);
  expect(toggledConfig.gobanSize).toBe(GobanSize.full19x19);
});

test("Toggling the arrow keys", () => {
  const config: Config = Config.default();

  expect(config.arrowKeysOn).toBe(false);

  const toggledConfig: Config = config.toggleArrowKeys();

  expect(toggledConfig.globalSwitch).toBe(true);
  expect(toggledConfig.arrowKeysOn).toBe(true);
  expect(toggledConfig.gobanSize).toBe(GobanSize.full19x19);
});

test("Cycling the goban size", () => {
  const config: Config = Config.default();

  let cycledConfig: Config = config.cycleSize();

  expect(cycledConfig.globalSwitch).toBe(true);
  expect(cycledConfig.arrowKeysOn).toBe(false);
  expect(cycledConfig.gobanSize).toBe(GobanSize.small9x9);

  cycledConfig = cycledConfig.cycleSize();

  expect(cycledConfig.globalSwitch).toBe(true);
  expect(cycledConfig.arrowKeysOn).toBe(false);
  expect(cycledConfig.gobanSize).toBe(GobanSize.medium13x13);

  cycledConfig = cycledConfig.cycleSize();

  expect(cycledConfig.globalSwitch).toBe(true);
  expect(cycledConfig.arrowKeysOn).toBe(false);
  expect(cycledConfig.gobanSize).toBe(GobanSize.full19x19);
});

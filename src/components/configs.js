const TICK_RATE = 100;
const GRID_SIZE = 35;
const GRID = [];

const DIRECTION_TICKS = {
  UP: (x, y) => ({ x, y: y - 1 }),
  BOTTOM: (x, y) => ({ x, y: y + 1 }),
  RIGHT: (x, y) => ({ x: x + 1, y }),
  LEFT: (x, y) => ({ x: x - 1, y })
};

const DIRECTIONS = {
  UP: "UP",
  BOTTOM: "BOTTOM",
  RIGHT: "RIGHT",
  LEFT: "LEFT"
};

const KEY_CODES_MAPPER = {
  38: "UP",
  39: "RIGHT",
  37: "LEFT",
  40: "BOTTOM"
};

export {
  DIRECTION_TICKS,
  DIRECTIONS,
  GRID,
  GRID_SIZE,
  KEY_CODES_MAPPER,
  TICK_RATE
};

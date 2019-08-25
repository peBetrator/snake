import { GRID_SIZE } from "../configs";

const isBorder = (x, y) =>
  x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE;

const getRandomNumberFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomCoordinate = () => ({
  x: getRandomNumberFromRange(1, GRID_SIZE - 1),
  y: getRandomNumberFromRange(1, GRID_SIZE - 1)
});

const isPosition = (x, y, diffX, diffY) => x === diffX && y === diffY;

const isSnake = (x, y, snakeCoordinates) =>
  snakeCoordinates.filter(coordinate =>
    isPosition(coordinate.x, coordinate.y, x, y)
  ).length;

const getSnakeHead = snake => snake.coordinates[0];

const getSnakeTail = snake => snake.coordinates.slice(1);

const getIsSnakeOutside = snake =>
  getSnakeHead(snake).x >= GRID_SIZE ||
  getSnakeHead(snake).y >= GRID_SIZE ||
  getSnakeHead(snake).x <= 0 ||
  getSnakeHead(snake).y <= 0;

const getIsSnakeClumy = snake =>
  isSnake(getSnakeHead(snake).x, getSnakeHead(snake).y, getSnakeTail(snake));

const getIsSnakeEating = ({ snake, snack }) =>
  isPosition(
    getSnakeHead(snake).x,
    getSnakeHead(snake).y,
    snack.coordinate.x,
    snack.coordinate.y
  );

const getSnakeWithoutStub = snake =>
  snake.coordinates.slice(0, snake.coordinates.length - 1);

export {
  isBorder,
  isPosition,
  isSnake,
  getRandomCoordinate,
  getIsSnakeOutside,
  getIsSnakeEating,
  getSnakeWithoutStub,
  getIsSnakeClumy,
  getSnakeHead,
  getSnakeTail
};

import cs from "classnames";
import { getSnakeHead, isBorder, isPosition, isSnake } from "../common";

const getCellCs = (isGameOver, snake, snack, x, y) =>
  cs("grid-cell", {
    "grid-cell-border": isBorder(x, y),
    "grid-cell-snake": isSnake(x, y, snake.coordinates),
    "grid-cell-snack": isPosition(x, y, snack.coordinate.x, snack.coordinate.y),
    "grid-cell-hit":
      isGameOver &&
      isPosition(x, y, getSnakeHead(snake).x, getSnakeHead(snake).y)
  });

export default getCellCs;

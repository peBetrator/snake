import { DIRECTION_TICKS } from "../configs";
import {
  getIsSnakeEating,
  getSnakeHead,
  getSnakeWithoutStub,
  getRandomCoordinate
} from "../common";

const reducer = (state, action) => {
  switch (action.type) {
    case "SNAKE_CHANGE_DIRECTION":
      return {
        ...state,
        playground: {
          ...state.playground,
          direction: action.direction
        }
      };
    case "SNAKE_MOVE":
      const isSnakeEating = getIsSnakeEating(state);

      const snakeHead = DIRECTION_TICKS[state.playground.direction](
        getSnakeHead(state.snake).x,
        getSnakeHead(state.snake).y
      );

      const snakeTail = isSnakeEating
        ? state.snake.coordinates
        : getSnakeWithoutStub(state.snake);

      const snackCoordinate = isSnakeEating
        ? getRandomCoordinate()
        : state.snack.coordinate;

      return {
        ...state,
        snake: {
          coordinates: [snakeHead, ...snakeTail]
        },
        snack: {
          coordinate: snackCoordinate
        }
      };
    case "GAME_OVER":
      return {
        ...state,
        playground: {
          ...state.playground,
          isGameOver: true
        }
      };
    default:
      throw new Error();
  }
};

export default reducer;

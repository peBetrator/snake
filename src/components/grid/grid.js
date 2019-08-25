import React from "react";

import { GRID } from "../configs";
import Row from "./row";

const Grid = ({ isGameOver, snake, snack }) => (
  <div>
    {GRID.map(y => (
      <Row y={y} key={y} snake={snake} snack={snack} isGameOver={isGameOver} />
    ))}
  </div>
);

export default Grid;

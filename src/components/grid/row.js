import React from "react";

import { GRID } from "../configs";
import Cell from "./cell";

const Row = ({ isGameOver, snake, snack, y }) => (
  <div className="grid-row">
    {GRID.map(x => (
      <Cell
        x={x}
        y={y}
        key={x}
        snake={snake}
        snack={snack}
        isGameOver={isGameOver}
      />
    ))}
  </div>
);

export default Row;

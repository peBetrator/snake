import React from "react";
import getCellCs from "../utils/cs-compose";

const Cell = ({ isGameOver, snake, snack, x, y }) => (
  <div className={getCellCs(isGameOver, snake, snack, x, y)} />
);

export default Cell;

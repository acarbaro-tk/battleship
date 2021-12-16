import { useContext } from "react";
import { colors } from "../constants/game";
import { GameContext } from "../context/GameContext";

export const useGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameBoard, ships, shipsDamagedPositions, currentTurn } = state;

  const handleAttackShip = (position) => {
    const newGameBoard = [...gameBoard];
    let newShips = [...ships];
    const damagedPositions = { ...shipsDamagedPositions };

    const newTurn = newGameBoard[position].isVisited ? currentTurn : currentTurn + 1;

    newGameBoard[position].isVisited = true;

    const ship = newShips.find((ship) => ship.squares.includes(position));

    if (ship) {
      newGameBoard[position].containsShip = true;
      newGameBoard[position].color = colors[ship.length];

      damagedPositions[position] = true;

      ship.isAlive = !ship.squares.every((square) => damagedPositions[square]);

      newShips = [...newShips.filter((item) => !item.squares.includes(position)), ship];
    }

    dispatch({
      type: "UPDATE_BOARD",
      payload: {
        gameBoard: newGameBoard,
        position,
        shipsDamagedPositions: { ...damagedPositions, [position]: true },
        currentTurn: newTurn
      }
    });
  };

  return { handleAttackShip };
};

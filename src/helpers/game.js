import { gameBoardH } from "../constants/game";

//Object that represents a square in the game board
export const Square = function (display) {
  return {
    display,
    isVisited: false,
    isShipAttacked: false,
    containsShip: false
  };
};

//Object that represents a ship
export const Ship = function ({ squares = [], length = 1 }) {
  return {
    isAlive: true,
    length,
    squares,
    direction: 1
  };
};

//create the game board
export const generateBoard = () => {
  return gameBoardH.map((display) => Square(display));
};

// Set if there is a ship in a square
export const setShipInBoard = (board, ship) => {
  ship.squares.forEach((square) => (board[square].containsShip = true));
  return [...board];
};

// get the ship initial position for random initiate
const getInitialPosition = (length) => {
  const baseRowPosition = Math.floor(Math.random() * 10) * 10;
  switch (length) {
    case 2:
      return baseRowPosition + Math.floor(Math.random() * 8);
    case 3:
      return baseRowPosition + Math.floor(Math.random() * 7);
    case 4:
      return baseRowPosition + Math.floor(Math.random() * 6);
    default:
      return Math.floor(Math.random() * 50);
  }
};

// Create a ship with a given length
export const createRandomShip = function (length) {
  const squares = [];
  const initialPosition = getInitialPosition(length);
  for (let i = 0; i < length; i++) {
    squares.push(initialPosition + i);
  }
  return Ship({ squares, length });
};

// Create all the ships for the game
export const generateShips = function () {
  const ships = [];
  const positionsTaken = {};

  ships.push(createRandomShip(4));

  for (let i = 0; i < 2; ) {
    const newShip = createRandomShip(3);
    const isNewShipValid = newShip.squares.every((square) => !positionsTaken[square]);
    if (isNewShipValid) {
      ships.push(newShip);
      newShip.squares.map((square) => (positionsTaken[square] = true));
      i++;
    }
  }

  for (let i = 0; i < 4; ) {
    const newShip = createRandomShip(1);
    const isNewShipValid = newShip.squares.every((square) => !positionsTaken[square]);
    if (isNewShipValid) {
      ships.push(newShip);
      newShip.squares.map((square) => (positionsTaken[square] = true));
      i++;
    }
  }

  for (let i = 0; i < 3; ) {
    const newShip = createRandomShip(2);
    const isNewShipValid = newShip.squares.every((square) => !positionsTaken[square]);
    if (isNewShipValid) {
      ships.push(newShip);
      newShip.squares.map((square) => (positionsTaken[square] = true));
      i++;
    }
  }

  return ships;
};

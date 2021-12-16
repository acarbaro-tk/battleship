import { DIFFICULTIES, difficultyList } from "../constants/game"
import { generateBoard, generateShips } from "../helpers/game"

export const getInitialState = () => ({
  gameBoard: generateBoard(),
  currentTurn: 0,
  gameDifficulty: difficultyList.find(
    (item) => item.name === DIFFICULTIES["HARD"]
  ),
  ships: generateShips(),
  numberOfTurns: 50,
  shipsDamagedPositions: {}
})

export const restoreBoardAfterSettings = () => ({
  gameBoard: generateBoard(),
  currentTurn: 0,
  ships: generateShips(),
  shipsDamagedPositions: {}
})

export const init = (obj) => {
  return {
    ...obj
  }
}

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DIFFICULTY":
      return { ...state, gameDifficulty: action.payload }
    case "UPDATE_BOARD": {
      const { gameBoard, shipsDamagedPositions, currentTurn } = action.payload
      return {
        ...state,
        gameBoard,
        currentTurn,
        shipsDamagedPositions
      }
    }
    case "RESTORE":
      return init(restoreBoardAfterSettings())
    case "RESET":
      return init(getInitialState())
    default:
      return { ...state }
  }
}

import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export const useGetGameStats = () => {
  const { state } = useContext(GameContext)

  const isGameOver = state?.currentTurn >= state?.gameDifficulty?.numberOfTurns
  const isWinner = state?.ships?.every((ship) => !ship.isAlive)
  const currentTurn = state?.currentTurn
  const difficulty = state?.gameDifficulty?.name

  return { isGameOver, isWinner, currentTurn, difficulty }
}

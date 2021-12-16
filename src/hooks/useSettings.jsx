import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { difficultyList } from "../constants/game"
import { GameContext } from "../context/GameContext"

export const useSettings = () => {
  const { dispatch } = useContext(GameContext)
  const navigate = useNavigate()

  const handleChangeDifficulty = (difficulty) => {
    const selectedDifficulty = difficultyList.find(
      (item) => item.name === difficulty
    )
    dispatch({ type: "RESTORE" })
    selectedDifficulty &&
      dispatch({
        type: "UPDATE_DIFFICULTY",
        payload: selectedDifficulty
      })
    navigate("/")
  }

  return { handleChangeDifficulty }
}

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { difficultyList } from "../constants/game"
import { GameContext } from "../context/GameContext"

export const useSettings = () => {
  const { dispatch } = useContext(GameContext)
  const [difficulty, setDifficulty] = useState("")
  const navigate = useNavigate()

  const handleChangeDifficulty = (difficulty) => {
    const selectedDifficulty = difficultyList.find(
      (item) => item.name === difficulty
    )
    dispatch({ type: "RESTORE" })
    if (selectedDifficulty) {
      dispatch({
        type: "UPDATE_DIFFICULTY",
        payload: selectedDifficulty
      })
      setDifficulty(selectedDifficulty)
    }
    navigate("/")
  }

  return { handleChangeDifficulty, difficulty }
}

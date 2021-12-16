import styled from "styled-components"
import { useContext, useEffect } from "react"
import Swal from "sweetalert2"

import { cols, rows } from "../../constants/game"

import oceanIcon from "../../assets/ocean.svg"
import shipIcon from "../../assets/ship.svg"
import crossIcon from "../../assets/cross.svg"

import { GameContext } from "../../context/GameContext"
import { useGetGameStats } from "../../hooks/useGetGameStats"
import { useGame } from "../../hooks/useGame"

export const Board = () => {
  const { state, dispatch } = useContext(GameContext)
  const { gameBoard } = state
  const { handleAttackShip } = useGame()
  const { isGameOver, isWinner, currentTurn, difficulty } = useGetGameStats()

  useEffect(() => {
    const saveGame = () => {
      const gameData = {
        difficulty,
        turns: currentTurn,
        status: isWinner ? "Win" : "Lost",
        date: new Date().toDateString()
      }

      const pastGames = JSON.parse(localStorage.getItem("pastGames")) ?? []
      pastGames.push(gameData)

      localStorage.setItem("pastGames", JSON.stringify(pastGames))
    }

    if (isWinner) {
      Swal.fire("Congratulations! You won the game").then((result) => {
        result.isConfirmed && saveGame()
      })
    }

    if (isGameOver) {
      Swal.fire("You lost. Try again").then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: "RESET" })
          saveGame()
        }
      })
    }
  }, [isWinner, isGameOver, dispatch, difficulty, currentTurn])

  return (
    <main>
      <div>
        <div>
          <div>Difficulty: {state?.gameDifficulty?.name}</div>
          <div data-testid="difficulty-turn">Turn: {currentTurn}</div>
        </div>

        <FlexContainer>
          <Label />
          {cols.map((col) => (
            <Label key={col}>{col}</Label>
          ))}
        </FlexContainer>
        <FlexContainer>
          <RowsLabelContainer>
            {rows.map((row) => (
              <Label key={row}>{row}</Label>
            ))}
          </RowsLabelContainer>
          <StyledBoard>
            {gameBoard?.map((item, index) => (
              <BoardItem
                key={Math.random()}
                onClick={() => handleAttackShip(index)}
                data-testid="board-item"
                color={item.color}>
                {item.isVisited && item.containsShip && (
                  <img src={shipIcon} alt="ship" data-testid="ship" />
                )}
                {item.isVisited && !item.containsShip && (
                  <img src={crossIcon} alt="cross" data-testid="cross" />
                )}
                {!item.isVisited && (
                  <img src={oceanIcon} alt="X" data-testid="ocean" />
                )}
              </BoardItem>
            ))}
          </StyledBoard>
        </FlexContainer>
      </div>
    </main>
  )
}

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 3rem);
`

const BoardItem = styled.div`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`

const RowsLabelContainer = styled.div`
  gap: 0.25rem;
  flex-direction: column;
  display: flex;
`

const Label = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
  gap: 2px;
`

const FlexContainer = styled.div`
  display: flex;
`

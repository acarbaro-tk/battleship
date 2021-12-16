import { renderHook, act } from "@testing-library/react-hooks"
import { MemoryRouter } from "react-router-dom"

import { useSettings } from "../hooks/useSettings"

import { GameContext } from "../context/GameContext"

const wrapper = ({ children }) => {
  const dispatch = jest.fn()
  const state = {
    gameBoard: null,
    currentTurn: 0,
    gameDifficulty: "Hard",
    ships: null,
    numberOfTurns: 50,
    shipsDamagedPositions: {}
  }
  return (
    <MemoryRouter>
      <GameContext.Provider
        value={{
          ...state,
          dispatch
        }}>
        {children}
      </GameContext.Provider>
    </MemoryRouter>
  )
}

test("should change difficulty to medium", () => {
  const { result } = renderHook(() => useSettings(), { wrapper })

  act(() => {
    result.current.handleChangeDifficulty("Medium")
  })

  expect(result.current.difficulty.name).toBe("Medium")
  expect(result.current.difficulty.numberOfTurns).toBe(100)
})

test("should change difficulty to hard", () => {
  const { result } = renderHook(() => useSettings(), { wrapper })

  act(() => {
    result.current.handleChangeDifficulty("Hard")
  })

  expect(result.current.difficulty.name).toBe("Hard")
  expect(result.current.difficulty.numberOfTurns).toBe(50)
})

test("should change difficulty to easy", () => {
  const { result } = renderHook(() => useSettings(), { wrapper })

  act(() => {
    result.current.handleChangeDifficulty("Easy")
  })

  expect(result.current.difficulty.name).toBe("Easy")
  expect(result.current.difficulty.numberOfTurns).toBe(Infinity)
})

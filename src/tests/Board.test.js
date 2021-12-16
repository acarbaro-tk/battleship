import { render, screen } from "@testing-library/react"
import Board from "../components/Board"

test("check difficulty is present", () => {
  render(<Board />)
  const difficultyElement = screen.getByText(/Difficulty/i)
  expect(difficultyElement).toBeInTheDocument()
})

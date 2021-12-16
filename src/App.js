import "./App.css"
import { Board } from "./components/Board"
import { useReducer } from "react"
import { GameContext } from "./context/GameContext"
import { gameReducer, init, getInitialState } from "./reducers/game"
import styled from "styled-components"
import { Navbar } from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Settings } from "./components/Settings"
import { LeaderBoard } from "./components/LeaderBoard"

function App() {
  const [state, dispatch] = useReducer(gameReducer, getInitialState(), init)
  return (
    <Router>
      <GameContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Navbar />
          <MainPage>
            <Routes>
              <Route path="/" element={<Board />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </MainPage>
        </div>
      </GameContext.Provider>
    </Router>
  )
}

export default App

const MainPage = styled.main`
  padding: 32px 0;
  max-width: 800px;
  margin: 0 auto;
`

import styled from "styled-components"
import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">
        {" "}
        <StyledLogo> BattleShip </StyledLogo>{" "}
      </StyledLink>
      <GameMenu>
        <div>
          <StyledLink to="/settings">Settings</StyledLink>
        </div>
        <div>
          <StyledLink to="/leaderboard">Leaderboard</StyledLink>
        </div>
      </GameMenu>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.div`
  height: 64px;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  justify-content: space-between;
`

const StyledLogo = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
`

const GameMenu = styled.div`
  display: flex;
  gap: 1rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  font-size: 18px;
`

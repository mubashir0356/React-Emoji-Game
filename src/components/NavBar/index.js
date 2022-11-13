// Write your code here.
import './index.css'

const Navbar = props => {
  const {isGameOn, score, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-text"> Emoji Game </h1>
      </div>

      {isGameOn ? (
        <div className="score-container">
          <p className="navbar-score"> Score: {score} </p>
          <p className="navbar-score"> Top Score: {topScore} </p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar

// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame} = props

  const onClickPlayAgain = () => {
    resetGame()
  }

  if (score === 12) {
    return (
      <div className="results-card">
        <div className="score-details-container">
          <h1 className="result">You Won</h1>
          <p className="score-label"> Best Score </p>
          <p className="score">12/12</p>
          <button
            type="button"
            className="play-again-btn"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="win-lose-img"
          alt="win or lose"
        />
      </div>
    )
  }
  return (
    <div className="results-card">
      <div className="score-details-container">
        <h1 className="result">You Lose</h1>
        <p className="score-label"> Score </p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="win-lose-img"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {isGameOn: true, score: 0, topScore: 0, selectedEmojisList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = emojiId => {
    const {selectedEmojisList, score, topScore} = this.state
    let newScore = selectedEmojisList.length
    if (newScore === 0) {
      newScore = 1
    }

    if (selectedEmojisList.includes(emojiId)) {
      if (newScore > topScore) {
        this.setState({isGameOn: false, topScore: newScore})
      } else {
        this.setState({isGameOn: false})
      }
    } else {
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, emojiId],
        score: prevState.score + 1,
      }))

      if (score === 11) {
        this.setState({
          isGameOn: false,
          topScore: 12,
          selectedEmojisList: [],
          score: 12,
        })
      }
    }
  }

  renderGamePage = () => {
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojis.map(eachEmojiDetails => (
          <EmojiCard
            key={eachEmojiDetails.id}
            emojiDetails={eachEmojiDetails}
            emojiClicked={this.onEmojiClick}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({
        isGameOn: true,
        selectedEmojisList: [],
        topScore: score,
        score: 0,
      })
    } else {
      this.setState({isGameOn: true, selectedEmojisList: [], score: 0})
    }
  }

  renderResultPage = () => {
    const {score} = this.state

    return <WinOrLoseCard score={score} resetGame={this.resetGame} />
  }

  render() {
    const {isGameOn, score, topScore} = this.state

    return (
      <div className="bg-container">
        <Navbar isGameOn={isGameOn} score={score} topScore={topScore} />

        <div className="app-container">
          <div className="emoji-game-container">
            {isGameOn ? this.renderGamePage() : this.renderResultPage()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame

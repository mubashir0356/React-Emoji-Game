// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClick = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-container">
      <button className="emoji-btn" type="button" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard

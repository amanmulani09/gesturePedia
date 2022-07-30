import { useState } from "react";
import "./styles.css";
const EmojiDB = {
  "✌️": "Victory Hand",
  "🤙": "Call Me Hand",
  "🤝": "Hand Shake",
  "🙌": "Raising Hands",
  "💪": "Strong",
  "👌": "Ok hand sign"
};

const EmojiDbArray = Object.keys(EmojiDB);

const Emojis = () => {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;
    let meaningInput = EmojiDB[userInput];

    meaningInput === undefined
      ? (meaningInput = "Invalid Emoji or Not Find in the DB")
      : null;

    setMeaning(meaningInput);
  };

  const emojiClickHandle = (emoji) => {
    let clickedEmoji = EmojiDB[emoji];
    setMeaning(clickedEmoji);
  };

  return (
    <div>
      <h3> Welcome to GesturePedia </h3>
      <input type="text" onChange={emojiInputHandler} />
      <h2> {meaning ? meaning : "Please Enter or Select Emoji"} </h2>

      {EmojiDbArray.map((emoji) => {
        return (
          <span
            style={{ cursor: "pointer", padding: "0.4rem" }}
            key={emoji.index}
            onClick={() => {
              emojiClickHandle(emoji);
            }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default Emojis;

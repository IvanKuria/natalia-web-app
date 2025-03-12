import { useState } from "react";

function App() {
  const [firstGif, setFirstGif] = useState("public/assets/Cat Pop Sticker.gif");
  const [defaultText, setDefaultText] = useState("Are you free this Sunday?")

  const catGifArray = [
    "public/assets/Happy Video Game Sticker.gif",
    "public/assets/Cat Dancing Sticker.gif",
    "public/assets/Cat Dancing Sticker.gif",
  ]

  function handleYesClick() {
    let i = Math.floor(Math.random() * catGifArray.length);
    setFirstGif(catGifArray[i]);
    setDefaultText("Yay see you then!");
  }

  return (
    <div className="component-wrapper">
      <img src={firstGif} alt="Cute Cat GIF" />
      <span>{defaultText}</span>
      <div className="button-container">
        <button className="button-1" onClick={handleYesClick} role="button">
          Yes
        </button>
        <button className="button-2" role="button">
          No
        </button>
      </div>
    </div>
  );
}

export default App;
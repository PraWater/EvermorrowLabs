import { useState } from "react";
import "./browseButton.css";
import BrowseBox from "/browseButton.svg";

export default function BrowseButton({ onBrowseEnter, onBrowseExit }) {
  const [text, setText] = useState("BROWSE");
  const onBrowseHover = () => {
    onBrowseEnter();
    const words = ["WOSERB", "SEWROB", "BROWSE"];
    const interval = 45;
    words.map((word, i) => {
      setTimeout(() => {
        setText(word);
      }, i * interval);
    });
  };
  return (
    <div
      className="browse-button"
      onMouseEnter={onBrowseHover}
      onMouseLeave={onBrowseExit}
    >
      <p className="browse-text">{text}</p>
      <img className="browse-svg" src={BrowseBox} />
    </div>
  );
}

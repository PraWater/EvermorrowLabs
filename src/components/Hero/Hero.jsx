import "./hero.css";
import GridSVG from "/grid.svg";
import BrowseButton from "/browseButton.svg";

export default function Hero({
  onTitleEnter,
  onTitleExit,
  onBrowseEnter,
  onBrowseExit,
}) {
  return (
    <div className="hero">
      <div
        className="title"
        onMouseEnter={onTitleEnter}
        onMouseLeave={onTitleExit}
      >
        Evermorrow Labs
      </div>
      <img className="grid-svg" src={GridSVG} />
      <div
        className="browse-button"
        onMouseEnter={onBrowseEnter}
        onMouseLeave={onBrowseExit}
      >
        <p className="browse-text">BROWSE</p>
        <img className="browse-svg" src={BrowseButton} />
      </div>
    </div>
  );
}

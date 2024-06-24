import BrowseButton from "./BrowseButton";
import "./hero.css";
import GridSVG from "/grid.svg";

export default function Hero({
  onTitleEnter,
  onTitleExit,
  onBrowseEnter,
  onBrowseExit,
  scrollToGames,
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
      <BrowseButton
        onBrowseEnter={onBrowseEnter}
        onBrowseExit={onBrowseExit}
        scrollToGames={scrollToGames}
      />
      <img className="grid-svg" src={GridSVG} />
    </div>
  );
}

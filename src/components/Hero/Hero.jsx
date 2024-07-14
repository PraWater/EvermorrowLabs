import BrowseButton from "./BrowseButton";
import "./hero.css";

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
        className="outline heading"
        onMouseEnter={onTitleEnter}
        onMouseLeave={onTitleExit}
      >
        Evermorrow Labs
      </div>
      <div className="title heading">Evermorrow Labs</div>
      <img className="vrGuy" src="/vrGuy.png" />
      <BrowseButton
        onBrowseEnter={onBrowseEnter}
        onBrowseExit={onBrowseExit}
        scrollToGames={scrollToGames}
      />
      <img className="grid" src="/grid.png" />
    </div>
  );
}

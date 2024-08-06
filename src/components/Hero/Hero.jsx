import BrowseButton from "./BrowseButton";
import "./hero.css";

export default function Hero({
  onTitleEnter,
  onTitleExit,
  onBrowseEnter,
  onBrowseExit,
  onLinkEnter,
  onLinkExit,
  scrollToGames,
}) {
  return (
    <div className="hero">
      <div className="header">
        <img className="header-logo" src="/evermorrow.png" />
        <div
          className="connect-button"
          onMouseEnter={onLinkEnter}
          onMouseLeave={onLinkExit}
          onClick={scrollToGames}
        >
          <p className="connect-text">Connect</p>
          <img className="connect-svg" src="/connectButton.svg" />
        </div>
      </div>
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

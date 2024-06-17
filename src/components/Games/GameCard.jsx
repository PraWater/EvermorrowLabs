import "./gameCard.css";

export default function GameCard({
  imgPath,
  gameLink,
  onGameCardEnter,
  onGameCardExit,
}) {
  return (
    <a className="gamecard" href={gameLink}>
      <div className="gamecard-overlay gamecard-edge" />
      <div className="gamecard-overlay gamecard-middle" />
      <div className="gamecard-overlay gamecard-edge" />
      <img
        className="gamecard-image"
        src={imgPath}
        onMouseEnter={onGameCardEnter}
        onMouseOut={onGameCardExit}
      />
    </a>
  );
}

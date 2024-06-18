import "./scrollText.css";

export default function ScrollText({ onTitleEnter, onTitleExit }) {
  return (
    <div className="scroll-text">
      <p onMouseEnter={onTitleEnter} onMouseOut={onTitleExit}>
        <span>building the next generation of gaming</span> · building the next
        generation of gaming
      </p>
      <p onMouseEnter={onTitleEnter} onMouseOut={onTitleExit}>
        redefining the future of xr games ·{" "}
        <span>redefining the future of xr games</span>
      </p>
      <p onMouseEnter={onTitleEnter} onMouseOut={onTitleExit}>
        <span>VR experience should be limitless</span> · VR experience should be
        limitless
      </p>
    </div>
  );
}

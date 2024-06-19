import "./scrollText.css";

export default function ScrollText({ onTitleEnter, onTitleExit }) {
  return (
    <div className="scroll-text">
      <div
        className="scroll-text-p scroll-top"
        onMouseEnter={onTitleEnter}
        onMouseOut={onTitleExit}
      >
        <span>building the next generation of gaming</span> · building the next
        generation of gaming ·{" "}
        <span>building the next generation of gaming</span> · building the next
        generation of gaming ·{" "}
      </div>
      <div
        className="scroll-text-p scroll-middle"
        onMouseEnter={onTitleEnter}
        onMouseOut={onTitleExit}
      >
        redefining the future of xr games ·{" "}
        <span>redefining the future of xr games</span> · redefining the future
        of xr games · <span>redefining the future of xr games</span> ·{" "}
      </div>
      <div
        className="scroll-text-p scroll-bottom"
        onMouseEnter={onTitleEnter}
        onMouseOut={onTitleExit}
      >
        <span>VR experience should be limitless</span> · VR experience should be
        limitless · <span>VR experience should be limitless</span> · VR
        experience should be limitless ·{" "}
      </div>
    </div>
  );
}

import "./scrollText.css";

export default function ScrollText({ onTitleEnter, onTitleExit }) {
  const lines = [
    "building the next generation of gaming",
    "we are redefining the future of xr games",
    "Your VR experience should be limitless",
  ];

  return (
    <div className="scroll-text">
      {lines.map((line) => {
        return (
          <div
            className="scroll-text-wrap"
            onMouseEnter={onTitleEnter}
            onMouseOut={onTitleExit}
            key={line}
          >
            <div className="scroll-text-p">
              <span className="gradient">{line}</span>
              <span>&middot;</span>
              <span>{line}</span>
              <span>&middot;</span>
              <span className="gradient">{line}</span>
              <span>&middot;</span>
              <span>{line}</span>
              <span>&middot;</span>
            </div>
            <div className="scroll-text-p">
              <span className="gradient">{line}</span>
              <span>&middot;</span>
              <span>{line}</span>
              <span>&middot;</span>
              <span className="gradient">{line}</span>
              <span>&middot;</span>
              <span>{line}</span>
              <span>&middot;</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

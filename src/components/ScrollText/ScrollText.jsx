import React from "react";
import "./scrollText.css";

export default function ScrollText({ onTitleEnter, onTitleExit }) {
  const lines = [
    "building the next generation of gaming",
    "we are redefining the future of xr games",
    "Your VR experience should be limitless",
  ];

  return (
    <div className="scroll-text">
      {lines.map((line) => (
        <div
          className="scroll-text-wrap"
          onMouseEnter={onTitleEnter}
          onMouseOut={onTitleExit}
          key={line}
        >
          {[1, 2].map((_, index) => (
            <div className="scroll-text-p" key={index}>
              {[true, false, true, false].map((isGradient, i) => (
                <React.Fragment key={i}>
                  <span className={isGradient ? "gradient" : ""}>{line}</span>
                  {i < 3 && <span>&middot;</span>}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

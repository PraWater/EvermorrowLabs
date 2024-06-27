import "./marqueeLogos.css";

export default function MarqueeLogos() {
  const imgPaths = [
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
    "/evermorrowFull.png",
  ];

  return (
    <div className="logos">
      <div className="logos-slide">
        {imgPaths.map((imgPath) => {
          return <img key={imgPath} src={imgPath} />;
        })}
      </div>

      <div className="logos-slide">
        {imgPaths.map((imgPath) => {
          return <img key={imgPath} src={imgPath} />;
        })}
      </div>
    </div>
  );
}

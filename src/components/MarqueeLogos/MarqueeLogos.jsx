import "./marqueeLogos.css";

export default function MarqueeLogos() {
  const imgPaths = [
    "/logos/evermorrow.png",
    "/logos/meta.svg",
    "/logos/steam.svg",
    "/logos/ue.svg",
    "/logos/unity.svg",
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
          return <img key={imgPath + "1"} src={imgPath} />;
        })}
      </div>
    </div>
  );
}

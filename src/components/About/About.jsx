import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <p className="about-title">
          About <span className="blue-text">Us</span>
        </p>
      </div>
      <div className="about-body">
        <p>
          At Evermorrow Labs we focus on making immersive experiences accessible
          to users. We are disrupting the way VR games are built, played and
          monetised. We are building a free to play ecosystem of fun,
          interactive and interconnected experiences. Each game we release is a
          part of the Evermorrow Mesh, allowing you to jump from one world to
          another seemlessly. Free and accessible across all Horizon OS
          supported platforms.
        </p>
        <div className="about-image">
          <img src="/about.png" />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import "./index.css";
import ScrollText from "./components/ScrollText/ScrollText";
import Footer from "./components/Footer/Footer";

function App() {
  const cursorRef = useRef(null);
  const gamesRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const scrollToGames = () => {
    gamesRef.current.scrollIntoView();
  };

  const onTitleEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-title");
  };

  const onTitleExit = () => {
    cursorRef.current.classList.remove("cursor-title");
    cursorRef.current.classList.add("cursor-default");
  };

  const onBrowseEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-browse");
  };

  const onBrowseExit = () => {
    cursorRef.current.classList.remove("cursor-browse");
    cursorRef.current.classList.add("cursor-default");
  };

  const onGameCardEnter = () => {
    cursorRef.current.classList.remove("cursor-default");
    cursorRef.current.classList.add("cursor-gamecard");
  };

  const onGameCardExit = () => {
    cursorRef.current.classList.remove("cursor-gamecard");
    cursorRef.current.classList.add("cursor-default");
  };

  return (
    <>
      <div className="cursor cursor-default" ref={cursorRef}>
        <img className="cursor-steam" src="/openSteam.svg" />
      </div>
      <Hero
        onTitleEnter={onTitleEnter}
        onTitleExit={onTitleExit}
        onBrowseEnter={onBrowseEnter}
        onBrowseExit={onBrowseExit}
        scrollToGames={scrollToGames}
      />
      <ScrollText onTitleEnter={onTitleEnter} onTitleExit={onTitleExit} />
      <div ref={gamesRef} />
      <Games
        onGameCardEnter={onGameCardEnter}
        onGameCardExit={onGameCardExit}
      />
      <Footer />
    </>
  );
}

export default App;

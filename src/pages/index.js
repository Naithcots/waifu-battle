import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Leaderboard from "../components/Leaderboard";
import Setup from "../components/Setup";

const Homepage = () => {
  const [gameState, setGameState] = useState("setup");
  const [characters, setCharacters] = useState(null);
  const [characterAmount, setCharacterAmount] = useState(10);

  useEffect(() => {
    if (gameState === "finish")
      setCharacters((prev) => prev.sort((a, b) => b.votes - a.votes));

    if (gameState === "restart") {
      setCharacters(null);
      setGameState("setup");
    }
  }, [gameState]);

  if (gameState === "setup")
    return (
      <Setup
        characterAmount={characterAmount}
        setCharacterAmount={setCharacterAmount}
        setGameState={setGameState}
      />
    );

  if (gameState === "finish")
    return <Leaderboard data={characters} setGameState={setGameState} />;

  return (
    gameState === "play" && (
      <CardContainer
        characters={characters}
        setCharacters={setCharacters}
        characterAmount={characterAmount}
        setGameState={setGameState}
      />
    )
  );
};

export default Homepage;

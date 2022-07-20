import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetchImages from "../hooks/useFetchImages";
import Spinner from "./Spinner";
import Card from "./Card";

const CardContainer = ({
  characterAmount,
  setGameState,
  characters,
  setCharacters,
}) => {
  //   const [characters, setCharacters] = useState(null);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [round, setRound] = useState(1);
  const { data, loading, error } = useFetchImages(characterAmount);
  let overtime = false;
  //   console.log(data, loading, error);

  const handleChoice = (card) => {
    // Add vote to character
    const charactersWithVote = characters.map((chara) =>
      chara.id === card.id ? { ...chara, votes: chara.votes + 1 } : chara
    );
    // Add pair to characters
    const newCharacters = charactersWithVote.map((chara) => {
      if (chara.id === firstCard.id) {
        return {
          ...chara,
          pairedWith: [...chara.pairedWith, secondCard.id],
          rounds: chara.rounds + 1,
        };
      } else if (chara.id === secondCard.id) {
        return {
          ...chara,
          pairedWith: [...chara.pairedWith, firstCard.id],
          rounds: chara.rounds + 1,
        };
      } else return chara;
    });

    setFirstCard(null);
    setSecondCard(null);
    setCharacters(newCharacters);
  };

  const nextTurn = (unpaired) => {
    // console.log(unpaired);
    let charactersCopy = characters;

    const first = unpaired[0];
    const opponent = unpaired
      .slice(1)
      .find((chara) => !chara.pairedWith.includes(first.id));

    if (!opponent) {
      charactersCopy = charactersCopy.map((chara) =>
        chara.id === first.id
          ? { ...chara, rounds: chara.rounds + 1, votes: chara.votes + 1 }
          : chara
      );
      setCharacters(charactersCopy);
    } else {
      setFirstCard(first);
      setSecondCard(opponent);
    }
  };

  const areAllPaired = () =>
    characters.every(
      (chara) => chara.pairedWith.length === characterAmount - 1
    );

  const overtimeSetup = () => {
    const charactersByVotes = characters.sort((a, b) => b.votes - a.votes);
    // console.log(charactersByVotes);
  };

  useEffect(() => {
    if (characters) {
      if (!firstCard && !secondCard) {
        if (areAllPaired()) overtime = true;
        if (overtime) {
          // overtimeSetup();
          setGameState("finish");
          return;
        }

        const unpaired = characters.filter(
          (chara) => chara.rounds === round - 1
        );

        if (!unpaired.length) {
          setRound(round + 1);
        }
        if (unpaired.length) nextTurn(unpaired);
      }
    }
  }, [characters]);

  useEffect(() => {
    if (characters && round > 1) {
      // console.log("NEXT ROUND");
      nextTurn(characters);
    }
  }, [round]);

  useEffect(() => {
    data && setCharacters(data);
  }, [data]);

  if (loading || !firstCard || !secondCard) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <StyledCardContainer>
      <Card data={firstCard} handleChoice={handleChoice} />
      <Card data={secondCard} handleChoice={handleChoice} />
    </StyledCardContainer>
  );
};
export default CardContainer;

const StyledCardContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  gap: 3em;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    align-items: center;
  }
`;

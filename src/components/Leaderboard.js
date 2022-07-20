import Image from "next/image";
import styled from "styled-components";
import Button from "../styles/Button";

const Leaderboard = ({ data, setGameState }) => {
  const stageData = data.slice(0, 3);

  return (
    <StyledLeaderboard>
      <Stage>
        {stageData.map((chara, idx) => (
          <div key={"s" + chara.id}>
            <StageImageContainer>
              <Image
                src={chara.url}
                alt="character"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0dCusBwADIQFx295xTQAAAABJRU5ErkJggg=="
              />
            </StageImageContainer>
            <StageText>{idx + 1}</StageText>
          </div>
        ))}
      </Stage>

      <ImagesGridHeader>Characters sorted by votes</ImagesGridHeader>
      <ImagesGrid>
        {data.map((chara) => (
          <ImageContainer key={"g" + chara.id}>
            <Image
              src={chara.url}
              alt="character"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0dCusBwADIQFx295xTQAAAABJRU5ErkJggg=="
            />
          </ImageContainer>
        ))}
      </ImagesGrid>
      <RestartButton onClick={() => setGameState("restart")}>
        Restart
      </RestartButton>
    </StyledLeaderboard>
  );
};
export default Leaderboard;

const StyledLeaderboard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Stage = styled.div`
  margin: 0 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1em;

  div:nth-child(1) > div {
    border: 2px solid #fbbf24;
  }

  div:nth-child(2) > div {
    border: 2px solid #e2e8f0;
  }

  div:nth-child(3) > div {
    border: 2px solid #b45309;
  }

  @media screen and (max-width: 645px) {
    grid-template-columns: 1fr 1fr;

    div:nth-child(3) {
      grid-column: span 2;
    }
  }
`;

const StageImageContainer = styled.div`
  position: relative;
  width: 20vw;
  height: 20vw;
  max-width: 250px;
  max-height: 250px;
  box-sizing: border-box;

  @media screen and (max-width: 645px) {
    width: 30vw;
    height: 30vw;
  }
`;

const StageText = styled.h1`
  grid-row-start: 2;
  margin: 0.25rem 0;
  text-align: center;
`;

const ImagesGridHeader = styled.h2`
  text-align: center;
`;

const ImagesGrid = styled.div`
  margin: 2em 1.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 1em;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

const RestartButton = styled(Button)`
  background-color: #fde047;
  font-size: 1.25rem;
  display: block;
  margin: 1em auto;
`;

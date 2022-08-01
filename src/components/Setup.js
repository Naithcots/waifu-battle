import styled from "styled-components";
import Button from "../styles/Button";
import Footer from "./Footer";

const Setup = ({ characterAmount, setCharacterAmount, setGameState }) => {
  return (
    <StyledSetup>
      <div>
        <Heading>How many waifus?</Heading>
        <Select
          onChange={(e) => setCharacterAmount(e.target.value)}
          value={characterAmount}
        >
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="14">15</option>
          <option value="16">20</option>
        </Select>
        <StartButton onClick={() => setGameState("play")}>Start</StartButton>
        <Footer />
      </div>
    </StyledSetup>
  );
};
export default Setup;

const StyledSetup = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: clamp(1.75rem, 6vw, 2.25rem);
  letter-spacing: 1px;
`;

const Select = styled.select`
  padding: 0.35em 0.75em;
  font-size: 1.15rem;
  border-radius: 6px;
`;

const StartButton = styled(Button)`
  display: block;
  margin: 1.25em auto;
  padding: 0.65em 2em;
  font-size: 1.2rem;

  background-color: #fde047;

  cursor: pointer;
`;

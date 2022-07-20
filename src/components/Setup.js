import styled from "styled-components";
import Button from "../styles/Button";

const Setup = ({ characterAmount, setCharacterAmount, setGameState }) => {
  return (
    <StyledSetup>
      <h2>Pick waifu amount:</h2>
      <select
        onChange={(e) => setCharacterAmount(e.target.value)}
        value={characterAmount}
      >
        <option value="10">10</option>
        <option value="14">15</option>
        <option value="16">20</option>
      </select>
      <StartButton onClick={() => setGameState("play")}>Start</StartButton>
    </StyledSetup>
  );
};
export default Setup;

const StyledSetup = styled.div`
  text-align: center;
`;

const StartButton = styled(Button)`
  display: block;
  margin: 1em auto;

  font-size: 1.25rem;
  letter-spacing: 0.75px;

  cursor: pointer;
`;

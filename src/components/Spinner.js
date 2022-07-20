import { ImSpinner2 } from "react-icons/im";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <StyledSpinner>
      <SpinnerImage />
    </StyledSpinner>
  );
};
export default Spinner;

const StyledSpinner = styled.div`
  width: 100%;
  text-align: center;
`;

const rotate = keyframes`
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(360deg);
    }
`;

const SpinnerImage = styled(ImSpinner2)`
  font-size: 2.5rem;
  animation: ${rotate} 2000ms linear infinite;
`;

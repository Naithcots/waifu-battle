import styled from "styled-components";

const Button = styled.button`
  padding: 0.65em 1.25em;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;

  transition: transform 150ms;

  &:hover {
    transform: scale(0.95);
  }
`;

export default Button;

import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Random Waifu Battle</h1>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  text-align: center;

  h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
`;

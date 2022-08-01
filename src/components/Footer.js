import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <Text>
        Coded by{" "}
        <GitLink href="https://github.com/Naithcots" target="_blank">
          @naithcots
        </GitLink>
      </Text>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1em 0;

  text-align: center;

  color: #fff;
  /* background-color: #e2e8f0; */
`;

const GitLink = styled.a`
  color: #fff;
`;

const Text = styled.p`
  margin: 0;
`;

import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <Text>
        Created by{" "}
        <GitLink href="https://github.com/Naithcots" target="_blank">
          @naithcots
        </GitLink>
      </Text>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  /* width: 100%; */

  padding: 0.5em 0;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 1em;

  text-align: right;

  color: #fff;
  /* background-color: #e2e8f0; */
`;

const GitLink = styled.a`
  color: #fff;
`;

const Text = styled.p`
  margin: 0;
`;

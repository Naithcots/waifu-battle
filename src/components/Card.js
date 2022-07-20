import Image from "next/image";
import styled from "styled-components";

const Card = ({ data, handleChoice }) => {
  return (
    <StyledCard onClick={() => handleChoice(data)}>
      <ImageContainer>
        <Image
          src={data.url}
          alt="card"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0dCusBwADIQFx295xTQAAAABJRU5ErkJggg=="
          style={{ borderRadius: "6px" }}
          priority
        />
      </ImageContainer>
    </StyledCard>
  );
};
export default Card;

const StyledCard = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 40vw;

  max-width: 400px;
  max-height: 400px;

  cursor: pointer;
  transition: transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(0.98);
  }

  @media screen and (max-width: 530px) {
    width: 55vw;
    height: 55vw;
  }
`;

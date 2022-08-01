import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";

const Card = ({ data, handleChoice }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const ref = useRef();

  const setMousePos = (e) => {
    let bounds = ref.current && ref.current.getBoundingClientRect();
    setX(Number((bounds.left + bounds.width / 2 - e.clientX).toFixed(2)));
    setY(Number((bounds.top + bounds.height / 2 - e.clientY).toFixed(2)));
  };

  const resetPos = () => {
    setX(0);
    setY(0);
  };

  return (
    <StyledCard ref={ref} onClick={() => handleChoice(data)} x={x} y={y}>
      <ImageContainer
        onMouseMove={setMousePos}
        onMouseLeave={resetPos}
        bg={data.dominant_color}
      >
        <Image
          src={data.url}
          alt="card"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          style={{ borderRadius: "6px" }}
          priority
        />
      </ImageContainer>
    </StyledCard>
  );
};
export default Card;

const StyledCard = styled.div.attrs((props) => ({
  style: {
    transform: `perspective(40vw) rotateX(${props.y / 24}deg) rotateY(${
      -props.x / 24
    }deg)`,
  },
}))``;

const ImageContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 40vw;

  max-width: 400px;
  max-height: 400px;

  background-color: ${(props) => props.bg};
  border-radius: 6px;

  cursor: pointer;
  /* transition: transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(0.98);
  } */

  @media screen and (max-width: 530px) {
    width: 55vw;
    height: 55vw;
  }
`;

import styled, { keyframes } from "styled-components";
import { primaryTextColor, secondaryTextColor } from "../../styles/theme";

const SlowShow = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  max-height: 850px;
  margin: 0 auto;
  padding: 20px;
  background-color: #222;
  border-radius: 4px;
  animation: ${SlowShow} 0.5s ease-in-out forwards;
  overflow: auto;
`;

export const Flex = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  max-width: 300px;
  max-height: 250px;
  margin-top: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 510;
  color: ${primaryTextColor};
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${secondaryTextColor};
  line-height: 1.4;
`;

export const DescriptionShort = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.4;
`;

export const Details = styled.span`
  color: ${primaryTextColor};
  margin-top: 12px;
`;

export const Flex2 = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  background: #333;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 4px;
  color: #fff;

  &:active {
    font-size: 10px;
  }

  &:hover {
    background: #636161;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 36px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export const Navigate = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  font-size: 0.6rem;
  background: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #636161;
  }
  &:active {
    font-size: 0.5rem;
  }
`;

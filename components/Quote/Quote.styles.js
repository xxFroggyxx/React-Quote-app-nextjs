import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
}`;

export const QuoteContainer = styled.div`
  height: 335px;
  width: 670px;
  display: grid;
  grid-template-areas: "Image Text" "Reset Reset";
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-areas: "Image" "Text" "Reset";
    grid-template-columns: 100%;
    max-width: 280px;
  }
`;

export const QuoteImage = styled.div`
  grid-area: Image;
  user-select: none;
  img {
    border: 1px solid black !important;
  }
  :before {
    content: '"';
    margin-top: -70px;
    margin-left: 20px;
    font-size: 120px;
    position: absolute;
    font-family: "Secular One", sans-serif;
    z-index: 1;
  }
  :after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    margin-left: -190px;
    margin-top: 33px;
    border-style: solid;
    border-width: 0 0 200px 200px;
    border-color: transparent transparent gold transparent;
  }
`;

export const QuoteText = styled.div`
  grid-area: Text;
  user-select: none;
  font-family: "Open Sans", sans-serif;
  p {
    font-weight: 300;
    margin: 0.5rem 1rem;
    &:nth-child(3) {
      margin: 0.1rem 1rem;
      color: rgba(0, 0, 0, 0.5);
      font-size: 13px;
    }
  }
  span {
    margin: 0.1rem 1rem;
    font-weight: bolder;
  }
`;

export const QuoteReset = styled.div`
  grid-area: Reset;
  svg {
    cursor: pointer;
    font-size: 40px;
    color: gold;
    @media only screen and (max-width: 320px) {
      padding-bottom: 20px;
    }
  }
  .animation {
    animation: ${rotate} 0.35s normal ease-in-out;
  }
`;

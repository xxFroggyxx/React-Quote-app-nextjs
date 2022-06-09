import styled, { css, keyframes } from 'styled-components';
import { HiRefresh } from 'react-icons/hi';

export const QuoteContainer = styled.div`
  height: 335px;
  width: 670px;
  display: grid;
  grid-template-areas: 'Image Text' 'Reset Reset';
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-areas: 'Image' 'Text' 'Reset';
    grid-template-columns: 100%;
    max-width: 280px;
  }
`;

export const QuoteImage = styled.div`
  grid-area: Image;
  user-select: none;
  border: 1px solid black;
  display: flex;

  img {
    object-fit: cover;
  }

  :before {
    content: open-quote;
    margin-top: -70px;
    margin-left: 20px;
    font-size: 120px;
    position: absolute;
    font-family: 'Secular One', sans-serif;
    z-index: 1;
  }

  /* Triangle */
  :after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    margin-left: 50px;
    margin-top: 32px;
    border-style: solid;
    border-width: 0 0 200px 200px;
    border-color: transparent transparent gold transparent;
  }
`;

export const QuoteText = styled.figure`
  grid-area: Text;
  user-select: none;
  font-family: 'Open Sans', sans-serif;
  min-height: 60%;
  display: flex;
  flex-direction: column;

  blockquote {
    margin: 0 0 1em 0;
  }

  figcaption {
    margin-top: auto;
  }

  p {
    font-weight: 300;
    margin: 0.5rem 1rem;

    &:nth-child(1) {
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

export const QuoteReset = styled.button`
  grid-area: Reset;
  background-color: transparent;
  border: none;

  & > * {
    display: flex;
  }
`;

export const ResetIcon = styled(HiRefresh)`
  cursor: pointer;
  font-size: 40px;
  color: gold;
`;

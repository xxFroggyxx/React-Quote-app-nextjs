import { useState, useEffect } from "react";
import { HiRefresh } from "react-icons/hi";
import { Img } from "components/Img";
import {
  QuoteContainer,
  QuoteImage,
  QuoteReset,
  QuoteText,
} from "./Quote.styles";

export const Quote = ({ localApi }) => {
  const [isActive, setIsActive] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(randomNumber);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    setRandomNumber(Math.floor(Math.random() * localApi.length));
  };

  return (
    <QuoteContainer>
      <QuoteImage>
        <Img src={localApi[randomNumber].img} />
      </QuoteImage>
      <QuoteText>
        <p>{localApi[randomNumber].quote}</p>
        <span>{localApi[randomNumber].name}</span>
        <p>{localApi[randomNumber].date}</p>
      </QuoteText>
      <QuoteReset>
        <HiRefresh
          className={isActive ? "animation" : ""}
          onClick={() => handleClick()}
          onAnimationEnd={() => setIsActive((prev) => !prev)}
        />
      </QuoteReset>
    </QuoteContainer>
  );
};

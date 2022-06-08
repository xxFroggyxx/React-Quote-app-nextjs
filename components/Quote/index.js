import { useState, useEffect } from "react";
import { HiRefresh } from "react-icons/hi";
import { Img } from "components/Img";
import {
  QuoteContainer,
  QuoteImage,
  QuoteReset,
  QuoteText,
} from "./Quote.styles";

export const Quote = ({ image, quote, name, date, onRefreshClick }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
    onRefreshClick();
  };
  return (
    <QuoteContainer>
      <QuoteImage>
        <Img src={image} />
      </QuoteImage>
      <QuoteText>
        <p>{quote}</p>
        <span>{name}</span>
        <p>{date}</p>
      </QuoteText>
      <QuoteReset>
        <HiRefresh
          className={isActive ? "animation" : ""}
          onClick={handleClick}
          onAnimationEnd={() => setIsActive((prev) => !prev)}
        />
      </QuoteReset>
    </QuoteContainer>
  );
};

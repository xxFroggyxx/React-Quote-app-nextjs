import useSWR from "swr";
import { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { Img } from "components/Img";
import {
  QuoteContainer,
  QuoteImage,
  QuoteReset,
  QuoteText,
} from "./Quote.styles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const Quote = ({ isActive, setIsActive }) => {
  const { data: localApi, error } = useSWR("/api/quotes", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!localApi) return <div>Loading...</div>;

  return (
    <QuoteContainer>
      <QuoteImage>
        <Img src={localApi[0].img} />
      </QuoteImage>
      <QuoteText>
        <p>{localApi[0].quote}</p>
        <span>{localApi[0].name}</span>
        <p>{localApi[0].date}</p>
      </QuoteText>
      <QuoteReset>
        <HiRefresh
          className={isActive ? "animation" : ""}
          onClick={() => setIsActive((prev) => !prev)}
          onAnimationEnd={() => setIsActive((prev) => !prev)}
        />
      </QuoteReset>
    </QuoteContainer>
  );
};

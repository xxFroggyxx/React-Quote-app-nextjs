import { useRef } from 'react';
import Image from 'next/image';
import { QuoteContainer, QuoteImage, QuoteReset, QuoteText, ResetIcon } from './Quote.styles';

const createAnimate = (element) => {
  return element.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }], {
    duration: 300,
  });
};

export const Quote = ({ image, quote, name, date, onRefreshClick }) => {
  const resetIconRef = useRef(null);

  const handleClick = () => {
    if (resetIconRef.current) {
      createAnimate(resetIconRef.current).play();
    }

    onRefreshClick();
  };

  return (
    <QuoteContainer>
      <QuoteImage>
        <Image src={image} alt="Author of the quote" width={242} height={224} priority />
      </QuoteImage>
      <QuoteText>
        <p>{quote}</p>
        <span>{name}</span>
        <p>{date}</p>
      </QuoteText>
      <QuoteReset ref={resetIconRef}>
        <ResetIcon onClick={handleClick} />
      </QuoteReset>
    </QuoteContainer>
  );
};
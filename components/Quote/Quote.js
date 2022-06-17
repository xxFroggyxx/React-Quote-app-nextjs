import { useRef, useState } from 'react';
import Image from 'next/image';
import { QuoteContainer, QuoteImage, QuoteReset, QuoteText, ResetIcon } from './Quote.styles';

const createAnimate = (element) => {
  return element.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }], {
    duration: 300,
  });
};

export const Quote = ({ image, quote, name, date, onRefreshClick }) => {
  const [animation, setAnimation] = useState(true);
  const resetIconRef = useRef(null);

  const handleClick = () => {
    setAnimation(false);
    setTimeout(() => {
      if (resetIconRef.current) {
        createAnimate(resetIconRef.current).play();
      }

      onRefreshClick();
    }, 300);
  };

  return (
    <QuoteContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: animation ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => setAnimation(true)}
    >
      <QuoteImage>
        <Image src={image} alt="Author of the quote" width={242} height={224} priority />
      </QuoteImage>
      <QuoteText>
        <blockquote>
          <q>{quote}</q>
        </blockquote>
        <figcaption>
          <b>{name}</b>
          <br aria-hidden />
          <time>{date}</time>
        </figcaption>
      </QuoteText>
      <QuoteReset ref={resetIconRef} onClick={handleClick} aria-label="Generate next quote">
        <ResetIcon aria-hidden />
      </QuoteReset>
    </QuoteContainer>
  );
};

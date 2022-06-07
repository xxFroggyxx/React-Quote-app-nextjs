import useSWR from "swr";
import { Img } from "components/Img";
import { Container, StyledImage } from "./Quote.styles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Quote = () => {
  const { data, error } = useSWR("/api/quotes", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <StyledImage>
        <Img src={data[0].Img} />
      </StyledImage>
    </Container>
  );
};

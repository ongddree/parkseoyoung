import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT, FE_STRENGTH_LIST, MARKUP_STRENGTH_LIST, JS_STRENGTH_LIST, REACT_STRENGTH_LIST, } from "@src/constants";
import { StrengthCard } from "./StrengthCard";

export const StrengthSection = () => {
  return(
    <Section>
      <StrengthCard title={"Front-end"} itemSet={FE_STRENGTH_LIST} />
      <StrengthCard title={"HTML/CSS"} itemSet={MARKUP_STRENGTH_LIST} />
      <StrengthCard title={"Javascript"} itemSet={JS_STRENGTH_LIST} />
      <StrengthCard title={"React"} itemSet={REACT_STRENGTH_LIST} />
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin: 0 auto;
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.XLARGE}) {
    width: 1300px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    width: 800px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 700px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 300px;
  }
`;
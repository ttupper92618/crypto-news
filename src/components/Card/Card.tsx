import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";
import { CardProps } from "./Card.types";

const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  padding: ${rem(1)} 0 ${rem(1)} 0;
  margin: 0 ${rem(1)} 0 ${rem(1)};
  border-bottom: ${rem(0.125)} solid #efefef;
  letter-spacing: normal;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${rem(8.25)};
  height: ${rem(8.25)};
  border-radius: ${rem(1)};
  border-color: #e2e2e2;
  border-style: solid;
  border-width: ${rem(0.125)};
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: ${rem(1)};
`;

const Thumbnail = styled.img<CardProps>`
  width: ${rem(8.25)};
  cursor: hand;
`;

const Title = styled.div`
  color: #343434;
  font-weight: 700;
  font-size: ${rem(1.5)};
  cursor: hand;
`;

const Author = styled.div`
  color: #525252;
  font-weight: 500;
  font-size: ${rem(1.5)};
  cursor: hand;
`;

const Description = styled.div`
  color: #777777;
  font-size: ${rem(1.5)};
  cursor: hand;
`;

const Card: React.FC<CardProps> = ({
  thumbnailUrl,
  title,
  author,
  description,
  onCardClicked,
}: CardProps) => {
  return (
    <CardContainer>
      <ThumbnailContainer>
        <Thumbnail src={thumbnailUrl}></Thumbnail>
      </ThumbnailContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DetailsContainer>
    </CardContainer>
  );
};

export default Card;

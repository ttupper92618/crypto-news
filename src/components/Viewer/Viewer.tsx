import { IndeterminateCheckBox } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";
import { ViewerProps } from "./Viewer.types";

const ViewerContainer = styled.div<ViewerProps>`
  overflow: auto;
  height: calc(100vh - ${rem(9.75)});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${rem(2)};
  letter-spacing: normal;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: #e2e2e2;
  border-style: solid;
  border-width: ${rem(0.125)};
  padding: ${rem(0.5)};
`;

const Image = styled.img<ViewerProps>`
  width: 100%;
`;

const Title = styled.div`
  color: #343434;
  font-weight: 700;
  font-size: ${rem(3)};
  text-align: left;
  padding-top: ${rem(2)};
  width: 100%;
`;

const Author = styled.div`
  color: #525252;
  font-size: ${rem(1.5)};
  text-align: left;
  padding-top: ${rem(0.25)};
  width: 100%;
`;

const Viewer: React.FC<ViewerProps> = ({ item }: ViewerProps) => {
  const getImageContainer = () => {
    console.log(item);
    if (item?.urlToImage) {
      return (
        <ImageContainer>
          <Image src={item?.urlToImage}></Image>
        </ImageContainer>
      );
    }
  };

  return (
    <ViewerContainer>
      {getImageContainer()}
      <Title>{item?.title}</Title>
      <Author>
        <b>By: </b>
        {item?.author}
      </Author>
    </ViewerContainer>
  );
};

export default Viewer;

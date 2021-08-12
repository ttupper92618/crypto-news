import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";
import { ViewerProps } from "./Viewer.types";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

const ViewerContainer = styled.div<ViewerProps>`
  overflow: auto;
  height: calc(100vh - ${rem(12.75)});
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

const Body = styled.div`
  color: #343434;
  font-size: ${rem(2)};
  text-align: left;
  padding-top: ${rem(2)};
  width: 100%;
`;

const ArticleLink = styled.a<ViewerProps>`
  font-size: ${rem(2)};
  text-align: left;
  font-weight: 500;
`;

const ShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const ShareItem = styled.div`
  padding: ${rem(1)};
`;

const Viewer: React.FC<ViewerProps> = ({ item }: ViewerProps) => {
  const getImageContainer = () => {
    if (item?.urlToImage) {
      return (
        <ImageContainer>
          <Image src={item?.urlToImage}></Image>
        </ImageContainer>
      );
    }
  };

  const getAuthor = () => {
    if (item?.author) {
      return (
        <Author>
          <b>By: </b>
          {item?.author}
        </Author>
      );
    }
  };

  const getBody = () => {
    if (item?.content) {
      return (
        <Body>
          {item?.content}{" "}
          <ArticleLink href={item?.url} target="_blank">
            See complete article
          </ArticleLink>
        </Body>
      );
    }
  };

  return (
    <ViewerContainer>
      {getImageContainer()}
      <Title>{item?.title}</Title>
      {getAuthor()}
      {getBody()}
      <ShareContainer>
        <ShareItem>
          <FacebookShareButton url={item?.url} quote={item?.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </ShareItem>

        <ShareItem>
          <TwitterShareButton url={item?.url} title={item?.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </ShareItem>

        <ShareItem>
          <LinkedinShareButton url={item?.url} title={item?.title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </ShareItem>

        <ShareItem>
          <PinterestShareButton
            url={item?.url}
            description={item?.title}
            media=""
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </ShareItem>

        <ShareItem>
          <FacebookMessengerShareButton url={item?.url} appId="521270401588372">
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </ShareItem>
      </ShareContainer>
    </ViewerContainer>
  );
};

export default Viewer;

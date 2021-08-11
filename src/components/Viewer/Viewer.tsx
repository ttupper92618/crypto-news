import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";
import { ViewerProps } from "./Viewer.types";

const ViewerContainer = styled.div<ViewerProps>`
  overflow: auto;
  height: calc(100vh - ${rem(9.75)});
`;

const Viewer: React.FC<ViewerProps> = ({ content }: ViewerProps) => {
  return (
    <ViewerContainer>
      <ul>
        {
          // dump all the URLs into the dom for now
          content?.articles.map((item: any) => {
            return <li>{item.url}</li>;
          })
        }
      </ul>
    </ViewerContainer>
  );
};

export default Viewer;

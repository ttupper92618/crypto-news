import React from "react";
import styled from "styled-components";
import rem from "../../utils/rem";
import { ViewerProps } from "./Viewer.types";

const ViewerContainer = styled.div<ViewerProps>`
  overflow: auto;
  height: calc(100vh - ${rem(9.75)});
`;

const ViewerFrame = styled.iframe`
  width: 100%;
  height: calc(100vh - ${rem(9.75)});
`;

const Viewer: React.FC<ViewerProps> = ({ item }: ViewerProps) => {
  return <ViewerContainer>{item?.url}</ViewerContainer>;
};

export default Viewer;

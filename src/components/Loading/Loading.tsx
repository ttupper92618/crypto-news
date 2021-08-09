import React from "react";
import styled from "styled-components";
import { LoadingProps } from "./Loading.types";
import rem from "../../utils/rem";
import loadingAnimation from "../../assets/loading.gif";
import ReactCSSTransitionGroup from "react-transition-group";

const LoadingIndicatorContainer = styled.div<LoadingProps>`
  display: ${({ show }: LoadingProps) => (show ? "" : "none")};
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 21%,
    rgba(255, 255, 255, 0) 52%
  );
  width: ${({ size }: LoadingProps) =>
    size == "small" ? rem(12) : size == "medium" ? rem(24) : rem(48)};
`;

const Loading: React.FC<LoadingProps> = ({
  show,
  message,
  size,
}: LoadingProps) => {
  let renderSize = size == "small" ? 12 : size == "medium" ? 24 : 48;
  return (
    <LoadingIndicatorContainer show={show} size={size}>
      <img src={loadingAnimation} width={rem(renderSize)} alt="loader" />
    </LoadingIndicatorContainer>
  );
};

export default Loading;

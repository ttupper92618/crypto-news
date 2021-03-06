import React from "react";
import styled from "styled-components";
import { OverlayProps } from "./Overlay.types";
import logo from "../../assets/logo.gif";
import rem from "../../utils/rem";

const OverlayContainer = styled.div<OverlayProps>`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffdea;
  color: #000000;
  display: ${({ show }: OverlayProps) => (show ? "" : "none")};
`;

const Overlay: React.FC<OverlayProps> = ({
  show,
  message,
  loaderWidth,
}: OverlayProps) => {
  return (
    <OverlayContainer show={show}>
      <img src={logo} width={rem(loaderWidth ? loaderWidth : 60)} alt="logo" />
    </OverlayContainer>
  );
};

export default Overlay;

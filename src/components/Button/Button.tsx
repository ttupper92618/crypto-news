import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import rem from "../../utils/rem";

const StyledButton = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  color: ${({ primary }: ButtonProps) => (primary ? "#ffffff" : "#333333")};
  background-color: ${({ primary }: ButtonProps) =>
    primary ? "#1ea7fd" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
  font-size: ${({ size }: ButtonProps) =>
    size == "small" ? rem(1.4) : size == "medium" ? rem(1.75) : rem(2)};
  padding: ${({ size }: ButtonProps) =>
    size == "small"
      ? `${rem(1.4)} ${rem(1.75)}`
      : size == "medium"
      ? `${rem(1.25)} ${rem(2.5)}`
      : `${rem(1.4)} ${rem(3)}`};
  cursor: hand;
`;

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
}: ButtonProps) => {
  return (
    <StyledButton primary={primary} size={size}>
      {label}
    </StyledButton>
  );
};

export default Button;

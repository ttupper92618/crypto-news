import React from "react";
import styled from "styled-components";
import { HeaderProps } from "./Header.types";
import Button from "../Button/Button";
import rem from "../../utils/rem";

const HeaderWrapper = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const Logo = styled.svg`
  display: inline-block;
  vertical-align: top;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: left;
`;

const TitleBlock = styled.div`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(17.5)};
`;

const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </Logo>
        <TitleBlock>Cryptly</TitleBlock>
      </LogoWrapper>
      <div>
        {user ? (
          <Button size="small" label="Log out" />
        ) : (
          <>
            <ButtonContainer>
              <Button size="small" label="Log in" />
              <Button primary size="small" label="Sign up" />
            </ButtonContainer>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;

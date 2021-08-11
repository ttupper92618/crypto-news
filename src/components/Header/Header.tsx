import React from "react";
import styled from "styled-components";
import { HeaderProps } from "./Header.types";
import Button from "../Button/Button";
import rem from "../../utils/rem";

const HeaderWrapper = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${rem(2.25)} ${rem(2.25)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const Logo = styled.svg`
  display: inline-block;
  vertical-align: top;
  width: ${rem(4)};
  height: ${rem(4)};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBlock = styled.div`
  font-weight: 900;
  font-size: ${rem(2.5)};
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
  display: flex;
  flex-direction: row;
`;

const SubtitleBlock = styled.div`
  font-weight: 300;
  font-size: ${rem(1.5)};
  color: black;
  margin-left: ${rem(1.25)};
  transform: translateY(-${rem(0.5)});
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(18.25)};
`;

const Trademark = styled.sup`
  font-size: ${rem(1)};
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
          <circle fill="#FFD572" cx="16" cy="16" r="15.5" />
          <polygon
            fill="#FCB765"
            points="16,27.5 6,22.5 6,9.5 16,4.5 26,9.5 26,22.5 "
          />
          <path
            fill="#3B3344"
            d="M16,32C7.2,32,0,24.8,0,16S7.2,0,16,0s16,7.2,16,16S24.8,32,16,32z M16,1C7.7,1,1,7.7,1,16s6.7,15,15,15
            s15-6.7,15-15S24.3,1,16,1z"
          />
          <path
            fill="#3B3344"
            d="M24.7,6.3c-1.1-1-2.4-1.8-3.9-2.4L21.2,3c1.5,0.6,2.9,1.5,4.1,2.6L24.7,6.3z"
          />
          <path
            fill="#3B3344"
            d="M19.9,3.6c-0.5-0.1-1-0.3-1.4-0.4l0.2-1c0.5,0.1,1,0.2,1.6,0.4L19.9,3.6z"
          />
          <rect x="9" y="10" fill="#3B3344" width="1" height="5" />
          <rect x="17" y="10" fill="#3B3344" width="1" height="5" />
          <path
            fill="#3B3344"
            d="M15,15h-3c-0.3,0-0.5-0.2-0.5-0.5v-4c0-0.3,0.2-0.5,0.5-0.5h3c0.3,0,0.5,0.2,0.5,0.5v4
            C15.5,14.8,15.3,15,15,15z M12.5,14h2v-3h-2V14z"
          />
          <path
            fill="#3B3344"
            d="M12.5,22h-3C9.2,22,9,21.8,9,21.5v-4C9,17.2,9.2,17,9.5,17h3c0.3,0,0.5,0.2,0.5,0.5v4
            C13,21.8,12.8,22,12.5,22z M10,21h2v-3h-2V21z"
          />
          <path
            fill="#3B3344"
            d="M23,15h-3c-0.3,0-0.5-0.2-0.5-0.5v-4c0-0.3,0.2-0.5,0.5-0.5h3c0.3,0,0.5,0.2,0.5,0.5v4
            C23.5,14.8,23.3,15,23,15z M20.5,14h2v-3h-2V14z"
          />
          <rect x="14.5" y="17" fill="#3B3344" width="1" height="5" />
          <rect x="17" y="17" fill="#3B3344" width="1" height="5" />
          <path
            fill="#3B3344"
            d="M23,22h-3c-0.3,0-0.5-0.2-0.5-0.5v-4c0-0.3,0.2-0.5,0.5-0.5h3c0.3,0,0.5,0.2,0.5,0.5v4
            C23.5,21.8,23.3,22,23,22z M20.5,21h2v-3h-2V21z"
          />
          <path
            fill="#3B3344"
            d="M16,28c-0.1,0-0.2,0-0.2-0.1l-10-5c-0.2-0.1-0.3-0.3-0.3-0.4v-13c0-0.2,0.1-0.4,0.3-0.4l10-5
            c0.1-0.1,0.3-0.1,0.4,0l10,5c0.2,0.1,0.3,0.3,0.3,0.4v13c0,0.2-0.1,0.4-0.3,0.4l-10,5C16.2,28,16.1,28,16,28z M6.5,22.2l9.5,4.8
            l9.5-4.8V9.8L16,5.1L6.5,9.8V22.2z"
          />
        </Logo>
        <TitleBlockContainer>
          <TitleBlock>
            Cryptly
            <Trademark>&trade;</Trademark>
          </TitleBlock>
        </TitleBlockContainer>
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

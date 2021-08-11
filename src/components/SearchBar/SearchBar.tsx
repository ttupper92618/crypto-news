import React from "react";
import styled from "styled-components";
import { SearchBarProps } from "./SearchBar.types";
import rem from "../../utils/rem";

const SearchBarContainer = styled.div`
  background-color: #e2e2e2;
  height: ${rem(7)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${rem(1)} 0 ${rem(1)};
  letter-spacing: normal;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const SearchBarField = styled.input`
  height: ${rem(3)};
  border-radius: ${rem(3)};
  width: 100%;
  padding: 0 ${rem(1)} 0 ${rem(1)};
  border: ${rem(0.125)} solid #cccccc;
`;

const SearchBarLabel = styled.div`
  color: #343434;
  font-weight: 700;
  font-size: ${rem(1.5)};
  white-space: nowrap;
  padding-right: ${rem(1)};
`;

const SearchBar: React.FC<SearchBarProps> = ({ term }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchBarLabel>Search for:</SearchBarLabel>
      <SearchBarField type="search" value="crypto"></SearchBarField>
    </SearchBarContainer>
  );
};

export default SearchBar;

import React from "react";
import styled from "styled-components";
import { SearchBarProps } from "./SearchBar.types";
import logo from "../../assets/logo.gif";
import rem from "../../utils/rem";

const SearchBarContainer = styled.div`
  background-color: #e2e2e2;
  height: ${rem(7)};
  width: 100%;
`;

const SearchBar: React.FC<SearchBarProps> = ({ term }: SearchBarProps) => {
  return <SearchBarContainer></SearchBarContainer>;
};

export default SearchBar;

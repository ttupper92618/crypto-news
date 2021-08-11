import React from "react";
import styled from "styled-components";
import { Article } from "../../services/story.service.types";
import rem from "../../utils/rem";
import SearchBar from "../SearchBar/SearchBar";
import { SidebarProps } from "./Sidebar.types";

const SidebarContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 3px 0 4px -2px rgba(0, 0, 0, 0.16);
  width: ${rem(37.5)};
  min-width: ${rem(37.5)};
  overflow: hidden;
  text-align: left;
`;

const SidebarContent = styled.div`
  height: calc(100vh - ${rem(16.25)});
  overflow-y: auto;
  padding-right: ${rem(1.5)};
`;

const Sidebar: React.FC<SidebarProps> = ({
  term,
  stories,
  onTermChanged,
  onItemSelected,
}: SidebarProps) => {
  const handleItemClick = (item: Article) => {
    if (onItemSelected) onItemSelected(item);
  };

  return (
    <SidebarContainer>
      <SearchBar term={term}></SearchBar>
      <SidebarContent>
        <ul>
          {
            // dump all the names into the dom for now
            stories?.articles.map((item: Article) => {
              return (
                <li onClick={() => handleItemClick(item)}>{item.title}</li>
              );
            })
          }
        </ul>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

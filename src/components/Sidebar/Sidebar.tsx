import React from "react";
import styled from "styled-components";
import { Article } from "../../services/story.service.types";
import rem from "../../utils/rem";
import SearchBar from "../SearchBar/SearchBar";
import { SidebarProps } from "./Sidebar.types";
import Card from "../Card/Card";

const SidebarContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 3px 0 4px -2px rgba(0, 0, 0, 0.16);
  width: ${rem(37.5)};
  min-width: ${rem(50)};
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
    console.log(item);
    if (onItemSelected) onItemSelected(item);
  };

  return (
    <SidebarContainer>
      <SearchBar term={term}></SearchBar>
      <SidebarContent>
        {stories?.articles.map((item: Article) => {
          return (
            <Card
              thumbnailUrl={item.urlToImage}
              title={item.title}
              author={item.author}
              description={item.description}
              onCardClicked={() => handleItemClick(item)}
            ></Card>
          );
        })}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

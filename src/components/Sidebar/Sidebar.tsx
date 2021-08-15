import React from "react";
import styled from "styled-components";
import { Article } from "../../services/story.service.types";
import rem from "../../utils/rem";
import SearchBar from "../SearchBar/SearchBar";
import { SidebarProps } from "./Sidebar.types";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

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

const LoaderContent = styled.div`
  height: calc(100vh - ${rem(16.25)});
  overflow-y: auto;
  padding-right: ${rem(1.5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sidebar: React.FC<SidebarProps> = ({
  term,
  stories,
  onTermChanged,
  onItemSelected,
  loading,
}: SidebarProps) => {
  const handleLiftedTermChange = (term: string) => {
    if (onTermChanged) {
      onTermChanged(term);
    }
  };

  const handleLiftedCardClick = (item: any) => {
    if (onItemSelected) {
      onItemSelected(item);
    }
  };

  return (
    <SidebarContainer>
      <SearchBar
        term={term}
        onTermChanged={(e) => handleLiftedTermChange(e)}
      ></SearchBar>
      {!loading ? (
        <SidebarContent>
          {stories?.articles.map((item: Article, index) => {
            return (
              <Card
                key={index}
                item={item}
                onCardClicked={(item) => handleLiftedCardClick(item)}
              ></Card>
            );
          })}
        </SidebarContent>
      ) : (
        <LoaderContent>
          <Loading show={loading} size="medium"></Loading>
        </LoaderContent>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

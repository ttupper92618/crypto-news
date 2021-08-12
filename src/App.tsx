import "./App.css";
import React, { useState, useEffect } from "react";
import Overlay from "./components/Overlay/Overlay";
import { StoryService } from "./services/story.service";
import { Articles, Article, Error } from "./services/story.service.types";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Viewer from "./components/Viewer/Viewer";
import { useDebouncedCallback } from "use-debounce";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const ViewerAssembly = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const storyService = new StoryService();

  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [allStories, setAllStories] = useState<Articles>();
  const [searchTerm, setSearchTerm] = useState("crypto");
  const [selectedStory, setSelectedStory] = useState<Article>();

  useEffect(() => {
    // the first time the app spins up, get everything and hide the overlay when done
    if (!initialLoadDone) {
      fetchStories(searchTerm);
    }
  });

  const handleInitialLoad = (response: Articles) => {
    setAllStories(response as any);
    setInitialLoadDone(true);
    setShowOverlay(false);
  };

  const handleError = (err: any) => {
    // @ToDo: do something useful with error handling here
    console.log(err);
  };

  const changeStory = (item: Article) => {
    setSelectedStory(item);
  };

  /*const changeTerm = (term: string) => {
    setSearchTerm(term);
    fetchStories(term);
  };*/

  const changeTerm = useDebouncedCallback((term: string) => {
    setSearchTerm(term);
    fetchStories(term);
  }, 700);

  const fetchStories = (term: string) => {
    storyService
      .getEverything(term)
      .then((res) => {
        handleInitialLoad(res);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  // Just dumping the retrieved stories to the viewer for now.
  return (
    <div className="App">
      <Overlay show={showOverlay} loaderWidth={60} />
      <Layout>
        <Header />
        <ViewerAssembly>
          <Sidebar
            term={searchTerm}
            stories={allStories}
            onItemSelected={changeStory}
            onTermChanged={changeTerm}
          />
          <Viewer item={selectedStory}></Viewer>
        </ViewerAssembly>
      </Layout>
    </div>
  );
}

export default App;

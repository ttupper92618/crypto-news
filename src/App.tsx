import "./App.css";
import React, { useState, useEffect } from "react";
import Overlay from "./components/Overlay/Overlay";
import { StoryService } from "./services/story.service";
import { Articles, Article, Error } from "./services/story.service.types";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Viewer from "./components/Viewer/Viewer";

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
  const [selectedStoryUrl, setSelectedStoryUrl] = useState("");

  useEffect(() => {
    // the first time the app spins up, get everything and hide the overlay when done
    if (!initialLoadDone) {
      storyService
        .getEverything("crypto")
        .then((res) => {
          handleInitialLoad(res);
        })
        .catch((err) => {
          handleError(err);
        });
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
    setSelectedStoryUrl(item.url);
    console.log(item);
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
          />
          <Viewer contentUrl={selectedStoryUrl}></Viewer>
        </ViewerAssembly>
      </Layout>
    </div>
  );
}

export default App;

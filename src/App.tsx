import "./App.css";
import React, { useState, useEffect } from "react";
import Overlay from "./components/Overlay/Overlay";
import { StoryService } from "./services/story.service";
import { Articles, Error } from "./services/story.service.types";
import Button from "./components/Button/Button";
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

  return (
    <div className="App">
      <Overlay show={showOverlay} loaderWidth={60} />
      <Layout>
        {!showOverlay ? <Header /> : <></>}

        <ViewerAssembly>
          <Sidebar />
          <Viewer content={allStories}></Viewer>
        </ViewerAssembly>
      </Layout>
    </div>
  );
}

export default App;

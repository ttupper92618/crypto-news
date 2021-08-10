import "./App.css";
import React, { useState, useEffect } from "react";
import Overlay from "./components/Overlay/Overlay";
import { StoryService } from "./services/story.service";
import { Articles, Error } from "./services/story.service.types";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

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
      {!showOverlay ? <Header /> : <></>}
      <ul>
        {
          // dump all the URLs into the dom for now
          allStories?.articles.map((item) => {
            return <li>{item.url}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import Overlay from "./components/Overlay/Overlay";
import { StoryService } from "./services/story.service";

function App() {
  const storyService = new StoryService();

  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (!initialLoadDone) {
      storyService.getEverything("crypto");
      storyService.getHeadlines("crypto");
      storyService.getSources();

      setInitialLoadDone(true);
      setShowOverlay(false);
    }
  });

  return (
    <div className="App">
      <Overlay show={showOverlay} loaderWidth={60} />
    </div>
  );
}

export default App;

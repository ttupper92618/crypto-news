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
import { Provider } from "react-redux";
import store from "./state//state/index";

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

  const [showOverlay, setShowOverlay] = useState(true);
  const [allStories, setAllStories] = useState<Articles>();
  const [searchTerm, setSearchTerm] = useState("crypto");
  const [selectedStory, setSelectedStory] = useState<Article>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // call to fetchStories each each time searchTerm updates.
    // searchTerm is debounced in the changeterm method.
    if (searchTerm != "") {
      fetchStories(searchTerm);
    } else {
      setAllStories(undefined);
    }
  }, [searchTerm]);

  const handleLoad = (response: Articles) => {
    setAllStories(response as any);
    setShowOverlay(false);
    setIsLoading(false);
  };

  const handleError = (err: any) => {
    // @ToDo: do something useful with error handling here
    console.log(err);
    setIsLoading(false);
  };

  const changeStory = (item: Article) => {
    setSelectedStory(item);
  };

  const changeTerm = useDebouncedCallback((term: string) => {
    setSearchTerm(term);
  }, 700);

  const fetchStories = (term: string) => {
    setIsLoading(true);
    storyService
      .getEverything(term)
      .then((res) => {
        handleLoad(res);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <div className="App">
      <Provider store={store}>
        <Overlay show={showOverlay} loaderWidth={60} />
        <Layout>
          <Header />
          <ViewerAssembly>
            <Sidebar
              term={searchTerm}
              stories={allStories}
              onItemSelected={changeStory}
              onTermChanged={changeTerm}
              loading={isLoading}
            />
            <Viewer item={selectedStory}></Viewer>
          </ViewerAssembly>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;

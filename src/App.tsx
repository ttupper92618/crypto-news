import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import Overlay from "./components/Overlay/Overlay";
import { StoryService } from "./services/story.service";
import { Articles, Article, Error } from "./services/story.service.types";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Viewer from "./components/Viewer/Viewer";
import { useDebouncedCallback } from "use-debounce";

// actions
import {
  updateArticles,
  updateTerm,
  updateCurrentArticle,
  updateResultCount,
  updatePageCount,
} from "./state/actions/index";

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

  // local state which will not be kept in the store
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // store selectors / dispatch
  const dispatch = useDispatch();
  const term = useSelector((store: RootStateOrAny) => store.term);
  const articles = useSelector((store: RootStateOrAny) => store.articles);
  const selectedArticle = useSelector(
    (store: RootStateOrAny) => store.currentArticle
  );
  const pageSize = useSelector((store: RootStateOrAny) => store.pageSize);

  useEffect(() => {
    // call to fetchStories each each time searchTerm updates.
    // searchTerm is debounced in the changeterm method.
    if (term != "") {
      fetchStories(term);
    } else {
      dispatch(updateArticles(undefined));
    }
  }, [term]);

  const handleLoad = (response: Articles) => {
    dispatch(updateArticles(response));
    dispatch(updateResultCount(response.totalResults));
    dispatch(updatePageCount(Math.trunc(response.totalResults / pageSize)));

    setShowOverlay(false);
    setIsLoading(false);
  };

  const handleError = (err: any) => {
    // @ToDo: do something useful with error handling here
    console.log(err);
    setIsLoading(false);
  };

  const changeStory = (item: Article) => {
    dispatch(updateCurrentArticle(item));
  };

  const changeTerm = useDebouncedCallback((term: string) => {
    dispatch(updateTerm(term));
  }, 700);

  const fetchStories = (term: string) => {
    setIsLoading(true);
    storyService
      .getEverything(term, pageSize)
      .then((res) => {
        handleLoad(res);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <div className="App">
      <Overlay show={showOverlay} loaderWidth={60} />
      <Layout>
        <Header />
        <ViewerAssembly>
          <Sidebar
            term={term}
            stories={articles}
            onItemSelected={changeStory}
            onTermChanged={changeTerm}
            loading={isLoading}
          />
          <Viewer item={selectedArticle}></Viewer>
        </ViewerAssembly>
      </Layout>
    </div>
  );
}

export default App;

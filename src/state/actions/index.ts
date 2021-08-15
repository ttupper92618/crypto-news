import {
  UPDATE_ARTICLES,
  UPDATE_TERM,
  UPDATE_PAGE_SIZE,
  UPDATE_CURRENT_ARTICLE,
  UPDATE_CURRENT_PAGE,
  UPDATE_FIRSTTIME,
  UPDATE_LOGGEDIN,
  UPDATE_PAGE_COUNT,
  UPDATE_RESULT_COUNT,
  UPDATE_USER,
} from "./action.types";

export const updateArticles = (payload: any) => {
  return { type: UPDATE_ARTICLES, payload };
};

export const updateTerm = (payload: any) => {
  return { type: UPDATE_TERM, payload };
};

export const updateCurrentArticle = (payload: any) => {
  return { type: UPDATE_CURRENT_ARTICLE, payload };
};

export const updatePageSize = (payload: any) => {
  return { type: UPDATE_PAGE_SIZE, payload };
};

export const updateCurrentPage = (payload: any) => {
  return { type: UPDATE_CURRENT_PAGE, payload };
};

export const updateFirstTime = (payload: any) => {
  return { type: UPDATE_FIRSTTIME, payload };
};

export const updateLoggedIn = (payload: any) => {
  return { type: UPDATE_LOGGEDIN, payload };
};

export const updatePageCount = (payload: any) => {
  return { type: UPDATE_PAGE_COUNT, payload };
};

export const updateResultCount = (payload: any) => {
  return { type: UPDATE_RESULT_COUNT, payload };
};

export const updateUser = (payload: any) => {
  return { type: UPDATE_USER, payload };
};

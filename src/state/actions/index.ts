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

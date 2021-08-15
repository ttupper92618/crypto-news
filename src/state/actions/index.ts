import { UPDATE_ARTICLES, UPDATE_TERM } from "./action.types";

export const updateArticles = (payload: any) => {
  return { type: UPDATE_ARTICLES, payload };
};

export const updateTerm = (payload: any) => {
  return { type: UPDATE_TERM, payload };
};

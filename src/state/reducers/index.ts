import { AppState } from "../state/state.types";
import { UPDATE_ARTICLES, UPDATE_TERM } from "../actions/action.types";

export const initialState: AppState = {
  term: "crypto",
  pageSize: 100,
  currentPage: 1,
  loggedIn: false,
};

export const rootReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ARTICLES: {
      return {
        ...state,
        articles: action.payload,
      };
    }

    case UPDATE_TERM: {
      return {
        ...state,
        term: action.payload,
      };
    }

    default:
      return state;
  }
};

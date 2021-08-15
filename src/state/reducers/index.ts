import { AppState } from "../state/state.types";
import {
  UPDATE_ARTICLES,
  UPDATE_TERM,
  UPDATE_CURRENT_ARTICLE,
  UPDATE_CURRENT_PAGE,
  UPDATE_FIRSTTIME,
  UPDATE_LOGGEDIN,
  UPDATE_PAGE_COUNT,
  UPDATE_PAGE_SIZE,
  UPDATE_RESULT_COUNT,
  UPDATE_USER,
} from "../actions/action.types";

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

    case UPDATE_CURRENT_ARTICLE: {
      return {
        ...state,
        currentArticle: action.payload,
      };
    }

    case UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case UPDATE_FIRSTTIME: {
      return {
        ...state,
        firstTime: action.payload,
      };
    }

    case UPDATE_LOGGEDIN: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }

    case UPDATE_PAGE_COUNT: {
      return {
        ...state,
        pageCount: action.payload,
      };
    }

    case UPDATE_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.payload,
      };
    }

    case UPDATE_RESULT_COUNT: {
      return {
        ...state,
        resultCount: action.payload,
      };
    }

    case UPDATE_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};

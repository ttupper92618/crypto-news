import { Article, Articles } from "../../services/story.service.types";

export interface User {
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export interface AppState {
  term: string;
  pageSize: number;
  pageCount?: number;
  currentPage: number;
  resultCount?: number;
  articles?: Articles;
  currentArticle?: Article;
  user?: User;
  loggedIn: boolean;
  firstTime?: boolean;
}

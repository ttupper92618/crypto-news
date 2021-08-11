import { Article, Articles } from "../../services/story.service.types";

export interface SidebarProps {
  term: string;
  stories?: Articles;
  onTermChanged?: (term: string) => void;
  onItemSelected?: (item: Article) => void;
}

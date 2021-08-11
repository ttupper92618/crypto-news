import { Articles } from "../../services/story.service.types";

export interface SidebarProps {
  term: string;
  stories?: Articles;
  onTermChanged?: () => void;
}

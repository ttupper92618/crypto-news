import { Article } from "../../services/story.service.types";

export interface CardProps {
  thumbnailUrl?: string;
  title?: string;
  author?: string;
  description?: string;
  onCardClicked?: (item?: Article) => any;
}

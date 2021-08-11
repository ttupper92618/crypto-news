import { Article } from "../../services/story.service.types";

export interface CardProps {
  item?: Article;
  onCardClicked?: (item?: Article) => any;
}

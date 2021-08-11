export interface Source {
  id: string;
  name: string;
}

export interface Article {
  author: string;
  content: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
  description: string;
}

export interface Articles {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Sources {
  sources: Source[];
  status: string;
}

export interface Error {
  code: string;
  message: string;
  status: string;
}

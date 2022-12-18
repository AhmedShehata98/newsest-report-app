export interface IArticle {
  auther: string | null;
  content: string | null;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
  elapsedTime: string;
}
export interface INewsApiResponse {
  status: string;
  totalResult: number;
  articles: IArticle[];
  latestStories: IArticle[];
  upcommingStreaming: IArticle[];
}
export interface HomeProps {
  dehydratedState: INewsApiResponse;
}

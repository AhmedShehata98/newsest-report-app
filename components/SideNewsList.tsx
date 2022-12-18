import { nanoid } from "nanoid";
import React, { MouseEventHandler } from "react";
import { IArticle } from "../types/appTypes";
import Card from "./Card";

type SideNewsListProps = {
  articles: IArticle[];
  setShowStoryDetails: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      storyIndex: number;
    }>
  >;
};
const SideNewsList = ({ articles, setShowStoryDetails }: SideNewsListProps) => {
  const showDetailsModals = (storyIndex: number) => {
    setShowStoryDetails({
      isOpen: true,
      storyIndex,
    });
  };
  return (
    <div className="w-full max-h-[78vh] lg:w-[30%] overflow-x-auto">
      <ul className="flex flex-col gap-3">
        {Array.isArray(articles) &&
          articles?.map((article, i) => (
            <li
              key={nanoid(8)}
              className="cursor-pointer"
              onClick={() => showDetailsModals(i)}
            >
              <Card
                key={nanoid(4)}
                article={article}
                elapsedTime={article.elapsedTime}
                direction="row"
                media={
                  <img
                    src={article.urlToImage || "https://picsum.photos/20" + i}
                    alt="latest-news-img"
                    className="w-full object-cover aspect-square"
                  />
                }
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideNewsList;

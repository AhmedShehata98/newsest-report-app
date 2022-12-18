import { Typography } from "antd";
import { nanoid } from "nanoid";
import React from "react";
import { IArticle } from "../types/appTypes";
import HorizintalCard from "./HorizintalCard";

type LatestStoriesProps = {
  stories: IArticle[];
  setShowStoryDetails: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      storyIndex: number;
    }>
  >;
};
const LatestStories = ({
  stories,
  setShowStoryDetails,
}: LatestStoriesProps) => {
  const showDetailsModals = (storyIndex: number) => {
    setShowStoryDetails({
      isOpen: true,
      storyIndex,
    });
  };
  return (
    <>
      <Typography.Title level={3} className="uppercase mt-3 !text-zinc-700">
        latest stories
      </Typography.Title>
      <ul className="w-full h-max flex flex-col items-start justify-end gap-3">
        {stories.map((article, i) => (
          <li key={nanoid(8)} onClick={() => showDetailsModals(i)}>
            <HorizintalCard
              key={nanoid(4)}
              media={
                <img
                  src={article.urlToImage || "https://picsum.photos/70" + i}
                  alt={"news-image" + i}
                  className="max-w-[11rem] lg:max-w-[19rem] h-max aspect-square lg:aspect-video ml-auto object-cover"
                />
              }
              title={article?.title}
              publishDate={article?.publishedAt}
              time="12h ago"
              auther={article?.auther || "name is not available"}
              autherImg={<img src={"https://picsum.photos/20" + i} />}
              description={article?.description}
              source={article?.source}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default LatestStories;

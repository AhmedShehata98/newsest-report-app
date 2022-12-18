import { Typography } from "antd";
import { nanoid } from "nanoid";
import React from "react";
import { IArticle } from "../types/appTypes";
import Card from "./Card";

type TopStoriesProps = {
  stories: IArticle[];
};
const TopStories = ({ stories }: TopStoriesProps) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <Typography.Title level={3} className="uppercase mt-3 !text-zinc-700">
        Top stories
      </Typography.Title>
      <div className="max-w-full h-full overflow-x-auto">
        <ul className="w-full h-max flex gap-3 mb-0">
          {Array.isArray(stories) &&
            stories.map((story) => (
              <li key={nanoid(8)} className="min-w-[13rem]">
                <Card
                  key={nanoid(4)}
                  direction="col"
                  article={story}
                  media={
                    <img
                      src={story.urlToImage || "https://picsum.photos/1200/76"}
                      alt="news-image"
                      className="w-full aspect-video object-cover"
                    />
                  }
                  time="3h ago"
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TopStories;

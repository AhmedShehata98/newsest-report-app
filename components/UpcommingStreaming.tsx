import { Typography } from "antd";
import { nanoid } from "nanoid";
import React from "react";
import { IArticle } from "../types/appTypes";
import Card from "./Card";

type UpcommingStreamingProps = {
  upcommingStream: IArticle[];
  setShowStoryDetails: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      storyIndex: number;
    }>
  >;
};
const UpcommingStreaming = ({
  upcommingStream,
  setShowStoryDetails,
}: UpcommingStreamingProps) => {
  const showDetailsModals = (storyIndex: number) => {
    setShowStoryDetails({
      isOpen: true,
      storyIndex,
    });
  };
  return (
    <>
      <Typography.Title level={3} className="uppercase mt-3 !text-zinc-700">
        Upcomming Streaming
      </Typography.Title>
      <ul className="w-full h-max flex flex-col items-start justify-end gap-3">
        {Array.isArray(upcommingStream) &&
          upcommingStream.map((article, i) => (
            <li key={nanoid(10)}>
              <Card
                key={nanoid(8)}
                media={
                  <img
                    src={article?.urlToImage || "https://picsum.photos/40" + i}
                    alt={"news-image" + i}
                    className="max-w-full aspect-square object-cover"
                  />
                }
                article={article}
                elapsedTime={article.elapsedTime}
                direction="row"
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default UpcommingStreaming;

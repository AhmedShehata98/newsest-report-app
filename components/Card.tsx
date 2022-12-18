import { Typography } from "antd";
import React from "react";
import { calculateElapsedTime } from "../pages";
import { IArticle } from "../types/appTypes";

type cardProps = {
  article: IArticle;
  elapsedTime: string;
  media: React.ReactNode;
  direction: "row" | "col";
};
const Card = ({ article, media, elapsedTime, direction }: cardProps) => {
  return (
    <div className={`mini-card flex-${direction}`}>
      <figure
        className={
          direction === "row" ? "card-media" : "w-full aspect-video m-0"
        }
      >
        {media}
      </figure>
      <figcaption
        className={direction === "row" ? "card-body-row" : "card-body-col"}
      >
        <span className="flex justify-between items-center w-full">
          <Typography.Text className="text-xs text-zinc-500 uppercase">
            {article?.publishedAt}
          </Typography.Text>
          <Typography.Text className="text-xs text-zinc-500 uppercase">
            {elapsedTime}
          </Typography.Text>
        </span>
        <Typography.Paragraph
          ellipsis={{
            expandable: false,
            rows: 2,
          }}
          className="!mb-0"
        >
          {article?.title}
        </Typography.Paragraph>
      </figcaption>
    </div>
  );
};

export default Card;

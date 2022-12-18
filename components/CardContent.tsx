import { Typography } from "antd";
import React from "react";

type cardProps = {
  title: string;
  description: string;
  avatar: React.ReactNode;
  auther: string;
  puplishDate: string;
};
const CardContent = ({
  avatar,
  description,
  title,
  auther,
  puplishDate,
}: cardProps) => {
  return (
    <div className="absolute bottom-0 flex flex-col justify-end left-0 w-full h-full">
      <div className="w-full h-1/2 bg-gradient-to-t from-neutral-700 bg-opacity-50 !text-white p-3">
        <div className="flex gap-3 items-center justify-start">
          {avatar}
          <span className="flex flex-col items-start justify-start gap-2">
            <b className="m-0">{auther}</b>
            <small>{puplishDate}</small>
          </span>
        </div>
        <div className="mb-4 mt-2">
          <Typography.Title className="!text-white" level={4}>
            {title}
          </Typography.Title>
        </div>
        <div>
          <Typography.Paragraph
            ellipsis={{
              rows: 4,
              expandable: false,
              symbol: "...",
            }}
            className="text-zinc-300"
          >
            {description}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default CardContent;

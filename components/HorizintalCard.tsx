import { Typography } from "antd";
import React from "react";

type cardProps = {
  title: string;
  description: string;
  time: string;
  publishDate: string;
  media: React.ReactNode;
  autherImg: React.ReactNode;
  auther: string;
  source: {
    id: string | null;
    name: string;
  };
};
const HorizintalCard = ({
  media,
  publishDate,
  time,
  title,
  auther,
  description,
  autherImg,
  source,
}: cardProps) => {
  return (
    <div className="horizintal-card">
      <div className="hr-card-info-header">
        <header className="flex items-center justify-center gap-3 pb-2">
          <figure className="w-14 aspect-square border-2 border-slate-300 rounded-full overflow-hidden m-0">
            {autherImg}
          </figure>
          <figcaption className="w-full flex justify-between items-start flex-col gap">
            <Typography.Text strong className="uppercase !m-0">
              {auther}
            </Typography.Text>
            <span className="flex lg:gap-4 flex-col lg:flex-row !text-xs">
              <Typography.Text type="secondary">{publishDate}</Typography.Text>
              <Typography.Text type="secondary">{time}</Typography.Text>
            </span>
          </figcaption>
        </header>
        <figcaption>
          <Typography.Paragraph
            className="leading-4"
            strong
            ellipsis={{
              rows: 2,
              expandable: false,
            }}
          >
            {title}
          </Typography.Paragraph>
          <Typography.Paragraph
            className="leading-4 !text-xs lg:text-base"
            type="secondary"
            ellipsis={{
              rows: 3,
              expandable: false,
            }}
          >
            {description}
          </Typography.Paragraph>
        </figcaption>
      </div>
      <figure className="relative mb-0">
        {media}
        <p
          key={source.id}
          className="absolute bottom-0 left-0 bg-slate-800 border border-slate-500 border-b-0 text-white px-2 py-1 m-0"
        >
          {source.name}
        </p>
      </figure>
    </div>
  );
};

export default HorizintalCard;

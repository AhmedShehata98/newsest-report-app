import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

type NewsDetailsPageProps = {
  source: string;
  title: string;
  description: string;
  ImageToStory: string;
  dateOfPublished: string;
  dateOfUpdated: string;
  author: string;
};
const NewsDetailsPage = ({
  ImageToStory,
  author,
  dateOfPublished,
  dateOfUpdated,
  description,
  source,
  title,
}: NewsDetailsPageProps) => {
  return (
    <div className="min-w-full h-[85dvh] flex">
      <header className="w-full h-max flex items-start justify-start gap-2 flex-col">
        <div className="w-full flex justify-between items-center mt-3">
          <span className="flex items-center justify-between gap-3">
            <h5>{source}</h5>
            <p className="m-0">{dateOfPublished}</p>
          </span>
          <span>
            <Button type="text">
              <i className="fi fi-brands-linkedin"></i>
            </Button>
            <Button type="text">
              <i className="fi fi-brands-facebook"></i>
            </Button>
            <Button type="text">
              <i className="fi fi-brands-twitter"></i>
            </Button>
            <Button type="text">
              <i className="fi fi-sr-link"></i>
            </Button>
            <Button type="text">
              <i className="fi fi-sr-menu-dots"></i>
            </Button>
          </span>
        </div>
        <h3 className="text-4xl mx-auto mb-4">{title}</h3>
        <div className="w-full h-fit flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <figure className="w-14 h-14 border-2 grid place-content-center place-items-center rounded-full m-0">
              <UserOutlined className="text-2xl leading-3" />
            </figure>
            <span className="flex flex-col items-start justify-center">
              <b className="m-0 uppercase">{author}</b>
              <small>{source}</small>
            </span>
          </div>
          <b className="capitalize text-zinc-500">{dateOfUpdated}</b>
        </div>
        <figure className="w-full max-h-96 flex justify-center rounded-md overflow-hidden">
          <img
            src={ImageToStory}
            alt="img-of-story"
            className="w-full aspect-video object-center object-cover"
          />
        </figure>
      </header>
    </div>
  );
};

export default NewsDetailsPage;

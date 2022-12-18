import { UserOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IArticle } from "../types/appTypes";
import CardContent from "./CardContent";

type CarouselArticleProps = {
  news: IArticle[];
};
function CarouselArticle({ news }: CarouselArticleProps) {
  const router = useRouter();
  const [currentHeadArticleIndex, setCurrentHeadArticleIndex] =
    useState<number>(0);
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      clearInterval(intervalRef.current);
    });
  }, [router]);
  useEffect(() => {
    intervalRef.current = +setInterval(() => {
      if (router.isReady) {
        if (currentHeadArticleIndex >= news?.length - 1) {
          setCurrentHeadArticleIndex((prev) => prev - 1);
        }
        if (currentHeadArticleIndex <= 0) {
          setCurrentHeadArticleIndex((prev) => prev + 1);
        }
      }
    }, 5000);
  }, [router.isReady]);

  return (
    <article
      key={nanoid(8)}
      className="w-full h-full lg:w-2/3 flex justify-center items-center"
    >
      <figure className="relative min-w-full shadow rounded">
        <img
          loading="lazy"
          src={
            news?.[currentHeadArticleIndex]?.urlToImage ||
            "https://picsum.photos/1200/768"
          }
          alt="news-image"
          className="w-[100%] aspect-video object-cover"
        />
        <CardContent
          avatar={
            news?.[currentHeadArticleIndex]?.auther ? (
              <img
                src={"https://picsum.photos/1200/768"}
                alt="auther-img"
                className="w-11"
              />
            ) : (
              <span className="w-10 h-10 bg-zinc-200 rounded-full text-black text-xl grid place-items-center place-content-center">
                <UserOutlined />
              </span>
            )
          }
          title={news?.[currentHeadArticleIndex]?.title}
          description={news?.[currentHeadArticleIndex]?.description}
          auther={news?.[currentHeadArticleIndex]?.auther || "not mentioned"}
          puplishDate={news?.[currentHeadArticleIndex]?.publishedAt}
        ></CardContent>
      </figure>
    </article>
  );
}

export default CarouselArticle;

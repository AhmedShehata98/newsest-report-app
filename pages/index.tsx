import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { Modal, Typography } from "antd";
import TopStories from "../components/TopStories";
import LatestStories from "../components/LatestStories";
import UpcommingStreaming from "../components/UpcommingStreaming";
import { getTopHeadlinesNews } from "../services/API";
import { HomeProps, INewsApiResponse, IArticle } from "../types/appTypes";
import CarouselArticle from "../components/CarouselArticle";
import NewsDetailsPage from "../components/NewsDetailsPage";
import { useState } from "react";
import SideNewsList from "../components/SideNewsList";

export const calculateElapsedTime = (publishedAt: string) => {
  const now = new Date().getTime();
  const paste = new Date(publishedAt).getTime();
  const elapsedTime = now - paste;
  const elapsedFormatted = {
    year: new Date(elapsedTime).getFullYear(),
    month: new Date(elapsedTime).getMonth() + 1,
    day: new Date(elapsedTime).getDate(),
    hour: new Date(elapsedTime).getHours(),
    minute: new Date(elapsedTime).getMinutes(),
    second: new Date(elapsedTime).getSeconds(),
  };
  if (elapsedFormatted.second <= 60) {
    return `${elapsedFormatted.second} seconds ago`;
  }
  if (elapsedFormatted.minute <= 60) {
    return `${elapsedFormatted.minute} minutes ago`;
  }
  if (elapsedFormatted.hour <= 24) {
    return `${elapsedFormatted.hour} hours ago`;
  }
  if (elapsedFormatted.day <= 30) {
    return `${elapsedFormatted.month} month ago`;
  }
  if (elapsedFormatted.month <= 12) {
    return `${elapsedFormatted.year} yesrs ago`;
  }
  return `${elapsedFormatted.second} seconds ago`;
};

export default function Home(props: any) {
  const { dehydratedState }: HomeProps = props;
  const { error, isFetched, isLoading, data } = useQuery({
    queryKey: ["news-headLines"],
    queryFn: getTopHeadlinesNews,
  });
  const newsData = data as INewsApiResponse;

  const [showStoryDetails, setShowStoryDetails] = useState<{
    isOpen: boolean;
    storyIndex: number;
  }>({
    isOpen: false,
    storyIndex: -1,
  });

  const handleCloseModal = () => {
    setShowStoryDetails({
      isOpen: false,
      storyIndex: -1,
    });
  };

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <section className="container mx-auto px-4 gap-4">
        <Typography.Title level={3} className="uppercase mt-3 !text-zinc-700">
          Top headlines
        </Typography.Title>
        <div className="w-full max-h-screen-md lg:max-h-[78vh] flex items-start flex-wrap justify-between gap-3 mt-6 overflow-hidden">
          <CarouselArticle news={newsData?.articles} />
          <SideNewsList
            articles={newsData?.articles}
            setShowStoryDetails={setShowStoryDetails}
          />
        </div>
        <TopStories stories={newsData?.articles} />
        <div className="flex flex-col md:flex-row items-start justify-between mb-3">
          <div className="flex flex-col items-start mb-3 w-full md:w-[55%]">
            <LatestStories
              stories={newsData?.latestStories}
              setShowStoryDetails={setShowStoryDetails}
            />
          </div>
          <div className="flex flex-col items-start mb-3 w-full md:w-2/5 ">
            <UpcommingStreaming
              upcommingStream={newsData?.upcommingStreaming}
              setShowStoryDetails={setShowStoryDetails}
            />
          </div>
        </div>
      </section>
      <Modal
        title="Story Detailes"
        className="min-w-full h-screen mt-2"
        bodyStyle={{
          overflowY: "auto",
        }}
        open={showStoryDetails?.isOpen}
        onCancel={() => handleCloseModal()}
        footer
        centered
      >
        <NewsDetailsPage
          source={newsData?.articles[showStoryDetails?.storyIndex]?.source.name}
          ImageToStory={
            newsData?.articles[showStoryDetails?.storyIndex]?.urlToImage
          }
          author={
            newsData?.articles[showStoryDetails?.storyIndex]?.auther ||
            "auther not mentioned"
          }
          dateOfPublished={
            newsData?.articles[showStoryDetails?.storyIndex]?.publishedAt
          }
          dateOfUpdated={calculateElapsedTime(
            newsData?.articles[showStoryDetails?.storyIndex]?.publishedAt
          )}
          description={
            newsData?.articles[showStoryDetails?.storyIndex]?.description
          }
          title={newsData?.articles[showStoryDetails?.storyIndex]?.title}
        />
      </Modal>
    </div>
  );
}

export const getStaticProps = async () => {
  const queryClint = new QueryClient();
  await queryClint.prefetchQuery(["news-headLines"], getTopHeadlinesNews);

  return {
    props: {
      dehydratedState: dehydrate(queryClint),
    },
    revalidate: 5,
  };
};

import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { Content } = Layout;
  const queryClintRef = useRef(new QueryClient());
  console.log(pageProps?.dehydratedState);
  return (
    <QueryClientProvider client={queryClintRef.current}>
      <Hydrate state={pageProps?.dehydratedState}>
        <Layout>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
            />
            <link
              rel="stylesheet"
              href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css"
            />
          </Head>
          <Header />
          <Content className="!min-h-screen bg-zinc-200">
            <Component {...pageProps} />;
          </Content>
          <Footer />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

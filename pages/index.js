import Layout from "@/components/Layout";
import PostFeatured from "@/components/PostFeatured";
import PostLatest from "@/components/PostLatest";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictitus</title>
      </Head>
      <PostFeatured />
      <PostLatest />
    </Layout>
  );
}

import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import SectionHeader from "@/components/SectionHeader";
import Head from "next/head";

export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictitus</title>
      </Head>
      <div className="container md:mt-[100px]">
        <SectionHeader>UI Design</SectionHeader>
      </div>
      <div className="container md:mt-[40px]">
        <PostList />
      </div>
    </Layout>
  );
}

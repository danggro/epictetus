import Layout from "@/components/Layout";
import PostAuthor from "@/components/PostAuthor";
import PostMetaTitle from "@/components/PostMetaTitle";
import { useState } from "react";
import mockPosts from "../utils/posts.json";
import Head from "next/head";

export default function Detail() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Epictitus</title>
      </Head>
      {posts.map((post) => {
        if (post.id === "7") {
          return (
            <div key={post.id} className="container md:mt-[60px]">
              <div className="md:w-6/12 mx-auto">
                <div className="text-center">
                  <PostMetaTitle
                    category={post.category}
                    date={post.date}
                    title={post.title}
                    className="justify-center"
                  />
                </div>
                <div className="flex justify-center py-9">
                  <PostAuthor
                    authorAvatar={post.authorAvatar}
                    authorName={post.authorName}
                    authorJob={post.authorJob}
                  />
                </div>
              </div>
              <div className="md:w-10/12 mx-auto">
                <img src={post.image} className="w-full" />
              </div>
              <div className="md:w-8/12 mx-auto text-white mt-20">
                <p className="text-xl leading-[32px] mb-8">{post.detailMain}</p>
                <p className="text-[16px] leading-[30px]">
                  {post.detailSubMain}
                </p>
              </div>
            </div>
          );
        }
      })}
    </Layout>
  );
}

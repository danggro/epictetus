import mockPosts from "../utils/posts.json";
import { useState } from "react";
import PostCard from "@/components/PostCard";

export default function PostList() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <>
      {!posts.length ? (
        <div className="text-center text-white">
          <h2 className="text-[64px] pt-10">No result 😥</h2>
          <p className="text-[20px] py-5">
            We couldnt find any posts with the keyword `yahahahayuk`. Please try
            another keyword.
          </p>
        </div>
      ) : (
        <div className="flex md:-mx-4  flex-wrap">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full md:px-4 mt-[60px]">
              <PostCard {...post} />;
            </div>
          ))}
        </div>
      )}
    </>
  );
}

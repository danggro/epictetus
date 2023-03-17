import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import SectionHeader from "@/components/SectionHeader";

export default function Search() {
  return (
    <Layout>
      <div className="container mt-[100px]">
        <SectionHeader>Search: UI Design</SectionHeader>
      </div>
      <div className="container mt-[40px]">
        <PostList />
      </div>
    </Layout>
  );
}

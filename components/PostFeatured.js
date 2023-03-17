import Link from "next/link";
import PostInfo from "./PostInfo";

export default function PostFeatured() {
  return (
    <div className="container md:mt-[54px] ">
      <div className="flex md:-mx-4 flex-wrap">
        <div className="md:w-8/12 w-full md:px-4">
          <Link href="/detail">
            <img src="/Featured.png" alt="" />
          </Link>
        </div>
        <div className="md:w-4/12 w-full md:px-4 text-white">
          <PostInfo
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDesciption="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/Leslie_Alexander.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </div>
  );
}

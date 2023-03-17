import Link from "next/link";
import PostInfo from "./PostInfo";

export default function PostCard({ image, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <img src={image} alt="" className="rounded w-full" />
      </Link>
      ;
      <div>
        <PostInfo {...infoPost} />
      </div>
    </article>
  );
}

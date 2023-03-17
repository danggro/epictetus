import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function PostInfo({
  category,
  date,
  title,
  shortDesciption,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <h3 className="text-[16px] text-white/60 leading-[28px] py-5">
        {shortDesciption}
      </h3>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}

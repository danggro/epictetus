import Link from "next/link";

export default function PostMetaTitle({ category, date, title, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <>
      <div
        className={`flex items-center text-sm text-opacity-60  text-white/60 ${addClassName}`}
      >
        <p className="py-5 uppercase">{category}</p>
        <span className="dot mx-3"></span>
        <p>{date}</p>
      </div>

      <h2 className="text-2xl leading-[38px] text-white">
        <Link href="detail">{title}</Link>
      </h2>
    </>
  );
}

export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center">
      <div className="w-[60px]">
        <img src={authorAvatar} className="rounded-full object-cover" />
      </div>
      <div className="w-full pl-4">
        <p className="text-[16px] text-white">{authorName}</p>
        <p className="text-white/60 text-sm">{authorJob}</p>
      </div>
    </div>
  );
}

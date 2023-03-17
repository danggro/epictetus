export default function NavSearch({ className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className="">
      <input
        type="text"
        className={`h-[40px] w-[224px] bg-[#1F2937] opacity-60 rounded-full md:inline-block pl-12 bg-search ${addClassName}`}
        placeholder="Search"
      />
    </div>
  );
}

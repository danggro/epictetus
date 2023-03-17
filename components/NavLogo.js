import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-3">
        <div className="flex  px-5 py-2 bg-[#4B5563] items-center justify-center rounded-sm">
          <h2 className="text-lg">E</h2>
        </div>
        <div className="w-full">
          <h2>Epictetus</h2>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { useState } from "react";

export default function NavItem({ vertical }) {
  const [dropdown, setDropdown] = useState(false);
  const dropDownList = [
    { text: "Internet", href: "posts" },
    { text: "Books", href: "posts" },
    { text: "Open Source", href: "posts" },
  ];

  return (
    <ul
      className={`flex text-white    ${
        vertical ? "flex-col space-y-5 p-10" : "space-x-12 items-center"
      } `}
    >
      <li>
        <Link href="posts" className="hover:underline">
          UI Design
        </Link>
      </li>
      <li>
        <Link href="posts" className="hover:underline">
          Front-End
        </Link>
      </li>
      <li>
        <Link href="posts" className="hover:underline">
          Back-End
        </Link>
      </li>
      <li className="relative ">
        <a
          className="cursor-pointer hover:underline"
          onClick={() => setDropdown(!dropdown)}
        >
          Lainnya <img src="/chevron-down.svg" className="inline-block w-5" />
        </a>
        {dropdown && (
          <ul className="absolute mt-4 w-[200px] rounded-md bg-[#1F2937] shadow-2xl overflow-hidden">
            {dropDownList.map(({ text, href }) => (
              <li key={text} className="border-b border-white/10 last:border-0">
                <a href={href} className="flex px-6 py-3  hover:bg-gray-700/60">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}

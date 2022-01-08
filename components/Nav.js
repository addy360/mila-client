import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { usePostContext } from "../hooks/useContext";

function Nav() {
  const { posts } = usePostContext();
  return (
    <nav
      className=" bg-secondary-800 py-3 px-12 flex flex-col md:flex-row items-center drop-shadow sticky top-0 z-50 justify-between shadow-md"
      style={{ background: "url('/assets/bg.svg') center bottom/cover" }}
    >
      <Link href="/">
        <a
          className="
        font-extrabold
        text-5xl text-primary-900
        hover:text-primary
        mb-4
            transition-all
            "
        >
          Ablo
          <sup className="text-sm text-secondary-50">
            <span className="animate-bounce inline-block text-secondary-800">
              {posts.length}
            </span>
          </sup>
        </a>
      </Link>
      <NavLinks />
    </nav>
  );
}

export default Nav;

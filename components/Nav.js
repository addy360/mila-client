import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

function Nav() {
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
        </a>
      </Link>
      <NavLinks />
    </nav>
  );
}

export default Nav;

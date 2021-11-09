import React from "react";
import Link from "next/link";

function NavLinkItem({ href, title }) {
  return (
    <li className="ml-4">
      <Link href={href}>
        <a
          className="
        text-primary-900
        transition-all
        px-4
        py-1
        rounded
        hover:bg-prisec-800  hover:text-primary
        "
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

export default NavLinkItem;

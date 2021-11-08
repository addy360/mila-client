import React from "react";

function NavLinkItem({ href, title }) {
  return (
    <li class="ml-4">
      <a
        href={href}
        class="
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
    </li>
  );
}

export default NavLinkItem;

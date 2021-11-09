import React from "react";
import NavLinkItem from "./NavLinkItem";

function NavLinks() {
  return (
    <ul className="flex justify-center items-center">
      <NavLinkItem href="/" title="home" />
      <NavLinkItem href="/about" title="about" />
      <NavLinkItem href="/contact" title="contact us" />
    </ul>
  );
}

export default NavLinks;

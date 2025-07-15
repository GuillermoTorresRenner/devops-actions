import React from "react";
import Link from "next/link";

function LinkButton({ urlLink, title }) {
  return (
    <Link
      className="border border-white rounded-lg py-1 px-2 hover:border-primary active:bg-secondary"
      href={urlLink}
    >
      <p className="text-caption text-white">{title}</p>
    </Link>
  );
}

export default LinkButton;

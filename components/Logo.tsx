import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center w-32 h-10 border-2 border-red-500"
    >
      <span className="bg-red-500 w-2/3 max-h-full grid place-items-center place-content-center font-bold text-white">
        NewsEst
      </span>
      <span className="mx-1 h-max-h-full grid place-items-center place-content-center font-bold">
        Report
      </span>
    </Link>
  );
}

export default Logo;

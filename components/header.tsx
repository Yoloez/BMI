import React from "react";
import Link from "next/link";

function header() {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Link href={"/hello"}>Hello</Link>
      </div>
    </>
  );
}

export default header;

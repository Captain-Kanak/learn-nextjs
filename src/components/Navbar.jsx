import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = (
    <>
      <li className="hover:text-green-500">
        <Link href={"/"}>HOME</Link>
      </li>
      <li className="hover:text-green-500">
        <Link href={"/about"}>ABOUT</Link>
      </li>
      <li className="hover:text-green-500">
        <Link href={"/services"}>SERVICES</Link>
      </li>
      <li className="hover:text-green-500">
        <Link href={"/concepts"}>CONCEPTS</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <ul className="text-gray-900 text-xl font-semibold flex items-center gap-5">
          {links}
        </ul>
      </div>
    </nav>
  );
}

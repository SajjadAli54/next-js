import Link from "next/link";
import React from "react";

const NavBar = () => {
  const routes = [
    {
      name: "Next.js",
      link: "/",
    },
    {
      name: "Users",
      link: "/users/",
    },
    {
      name: "Products",
      link: "/products/",
    },
    {
      name: "Admin",
      link: "/admin/",
    },
  ];

  return (
    <div className="flex justify-between bg-slate-200 p-5">
      {routes.map((route) => (
        <Link
          key={route["link"]}
          className="hover:bg-slate-400"
          href={route["link"]}
        >
          {route["name"]}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;

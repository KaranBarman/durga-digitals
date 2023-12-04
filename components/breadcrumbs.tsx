const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];

import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
  return (
    <div>
      {" "}
      <ol className=" flex items-center space-x-2">
        {BREADCRUMBS.map((breadcrumb, i) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center text-sm">
              <Link
                href={breadcrumb.href}
                className=" font-medium text-sm text-muted-foreground hover:text-gray-900"
              >
                {breadcrumb.name}
              </Link>
              {i !== BREADCRUMBS.length - 1 ? (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumbs;

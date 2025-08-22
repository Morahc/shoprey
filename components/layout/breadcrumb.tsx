"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, House } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return {
      label: segment.replace(/-/g, " "),
      href,
    };
  });

  return (
    <nav className="py-12 bg-black/20 bg-[url(/images/breadcrumbs.jpg)] bg-cover bg-center">
      <div className="container flex items-center">
        <ol className="flex items-center gap-x-3">
          <li>
            <Link href="/">
              <House className="size-6 text-gray-500" />
            </Link>
          </li>

          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-x-3">
              <ChevronRight className="text-gray-500" />
              {index === crumbs.length - 1 ? (
                <span className="text-primary capitalize">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-gray-600 capitalize hover:text-primary">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

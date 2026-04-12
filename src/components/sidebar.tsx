"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/app/(protected)/actions";

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/receipts", label: "Receipts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" },
] as const;

export function Sidebar({ userEmail }: { userEmail: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between border-b border-neutral-200 bg-white px-4 h-14 sticky top-0 z-30">
        <span className="font-semibold tracking-tight">Track My Spending</span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="rounded-md p-2 hover:bg-neutral-100"
        >
          <span className="block w-5 h-0.5 bg-neutral-900 mb-1" />
          <span className="block w-5 h-0.5 bg-neutral-900 mb-1" />
          <span className="block w-5 h-0.5 bg-neutral-900" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50 md:z-0
          h-screen w-64 shrink-0
          bg-white border-r border-neutral-200
          flex flex-col
          transform transition-transform duration-200 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="px-6 h-16 flex items-center border-b border-neutral-200">
          <span className="font-semibold tracking-tight text-base">
            Track My Spending
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  block rounded-md px-3 py-2 text-sm font-medium
                  transition-colors
                  ${
                    active
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-neutral-200 p-4 space-y-3">
          <div
            className="text-xs text-neutral-500 truncate"
            title={userEmail}
          >
            {userEmail}
          </div>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-100"
            >
              Sign out
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

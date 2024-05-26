"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaHome } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { MdComputer } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";

import HamburgerMenu from "./HamburgerMenu";

export type HeaderItemType = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const headerItems: HeaderItemType[] = [
  {
    label: "ホーム",
    href: "/",
    icon: <FaHome />,
  },
  {
    label: "大学・大学院",
    href: "/school",
    icon: <FaSchool />,
  },
  {
    label: "研究",
    href: "/research",
    icon: <ImLab />,
  },
  {
    label: "スキル",
    href: "/skill",
    icon: <MdComputer />,
  },
  // TODO: ブログ機能の実装
  // {
  //   label: "ブログ",
  //   href: "/blog",
  //   icon: <FaHome />,
  // },
  {
    label: "お問い合わせ",
    href: "/contact",
    icon: <RiMailSendFill />,
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="mb-8 sticky top-0 left-0 right-0 z-50">
      {/* ハンバーガーメニュー */}
      <div className="md:hidden">
        <HamburgerMenu headerItems={headerItems} pathname={pathname} />
      </div>

      {/* ヘッダー */}
      <div className="flex justify-between p-3 bg-slate-900">
        <div className="select-none">
          <Link href="/" className="text-xl text-white no-underline">
            木下 倭
            <span className="text-sm">
              （きしたやまと）
            </span>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 m-0">
            {headerItems.map((headerItem) => (
              <li key={headerItem.label}>
                <Link href={headerItem.href} className={`pb-1 text-white no-underline ${headerItem.href === pathname ? "border-b-[2px]" : "hover:border-b-[2px]"}`}>
                  {headerItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

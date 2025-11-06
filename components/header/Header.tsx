"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const links = [
  { label: "Features", href: "#Features" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "FAQ", href: "#FAQ" },
];

const Header = () => {
  const params = useParams();
  const lang = params.lang;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link
            href="/"
            aria-label="Henko Group"
            title="Henko Group"
            className="flex items-center gap-2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-2 rounded-xl">
              <img
                alt="Henko Group Logo"
                src="https://framerusercontent.com/images/jnuD1MI94Vu45n44bbJ8JUBqts.png"
                className="h-6 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="text-gray-950 dark:text-gray-300 text-xl font-bold hidden md:block">
              Henko Group<span className="text-[#FFBC3F]">.</span>
            </span>
          </Link>
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${lang === "en" ? "" : lang}${link.href}`}
                aria-label={link.label}
                title={link.label}
                className="tracking-wide transition-colors duration-200 font-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <HeaderLinks />
          <ThemedButton />
          <LangSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Henko Group"
                      title="Henko Group"
                      className="inline-flex items-center gap-2"
                    >
                      <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-2 rounded-xl">
                        <img
                          alt="Henko Group Logo"
                          src="https://framerusercontent.com/images/jnuD1MI94Vu45n44bbJ8JUBqts.png"
                          className="h-6 w-auto"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                      <span className="text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        Henko Group<span className="text-[#FFBC3F]">.</span>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-normal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-label={link.label}
                          title={link.label}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4">
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

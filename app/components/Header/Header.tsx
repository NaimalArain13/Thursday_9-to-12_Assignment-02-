"use client";
import Link from "next/link";
import Image from "next/image"
import {Button} from "@/components/ui/button"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const routes = [
    { href: "#", name: "Tour" },
    { href: "#", name: "Features" },
    { href: "#", name: "Pricing" },
    { href: "#", name: "Industries" },
  ];

  return (
    <header className="flex top-0 z-10 sticky shadow-lg justify-between md:justify-center items-center p-4 bg-white text-black space-x-2 border border-b-yellow-500">
      <h1 className="text-xl font-bold">
        <Link href="/" className="mr-7 flex items-center">
        <Image src={"https://www.swiftsales.io/assets/svg/header-logo.svg"} alt="swiftsales" height={70} width={100} className="w-full max-w-md"/></Link>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4 md:items-center font-semibold text-gray-700 tracking-wide">
        {routes.map((route, index) => (
          <Link
            href={route.href}
            key={index}
            className={`px-3 py-2 rounded ${
              pathname === route.href ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
            }`}
          >
            {route.name}
          </Link>
        ))}
      <div className="flex space-x-1 items-center">
        <Button variant={"ghost"} className="underline underline-offset-2 text-lg text-gray-700 font-semibold tracking-tighter">Login</Button>
        <Button className="rounded-full p-6 px-9 font-bold  bg-yellow-500 hover:bg-black hover:text-white text-black tracking-widest">SIGN UP</Button>
        <Button className="rounded-full p-6 px-9 font-bold tracking-widest">BOOK A DEMO</Button>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="text-black md:hidden"
      >
        {isOpen ? <FiX size={28} /> : <RiMenu2Line size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-5 w-full bg-white text-black flex justify-center items-center shadow-md md:hidden p-4">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {routes.map((route, index) => (
              <Link
                href={route.href}
                key={index}
                className={`w-full text-center py-2 ${
                  pathname === route.href?
                 "text-yellow-500 font-bold" : "hover:text-yellow-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <div className="flex flex-col text-center space-y-5">
        <Button variant={"ghost"} className="underline underline-offset-2 text-lg">Login</Button>
        <Button className="rounded-full p-6 px-9 font-bold  bg-yellow-500 text-black">SIGN-UP</Button>
        <Button className="rounded-full p-6 px-9 font-bold">BOOK A DEMO</Button>
        </div>
          </nav>
        </div>
      )}
    </header>
  );
}

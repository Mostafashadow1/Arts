import Image from "next/image";
import React, { useState } from "react";
import logo from "images/logo.png";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
const Navbar = () => {
  const { asPath } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);
  const navItems = [
    {
      id: "1",
      title: "home",
      href: "/",
    },
    {
      id: "2",
      title: "NFTS",
      href: "/nfts",
    },
    {
      id: "3",
      title: "collections",
      href: "/collections",
    },
    {
      id: "4",
      title: "Sales",
      href: "/Sales",
    },
  ];

  // big screen start : md
  const menusBig = () => {
    return (
      <ul className="flex gap-x-10 capitalize ">
        {navItems.map((navItem) => (
          <Link key={navItem.id} href={navItem.href}>
            <li
              className={` text-secondColor text-base  cursor-pointer  ${
                asPath === navItem.href && " !text-activeColor cursor-default"
              }`}
            >
              {navItem.title}
            </li>
          </Link>
        ))}
      </ul>
    );
  };

  // small screen start : phone
  const menusSmall = () => {
    return (
      <div className=" fixed  inset-0  w-screen h-screen bg-mainColor z-50">
        <div className="flex justify-between cursor-pointer border-b ">
          <Link href="/">
            <div className="flex items-center">
              <Image src={logo} alt="logo" width="20px" height="20px" />
              <h2 className="text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#794ADC] to-[#FD80FF] ">
                Arts
              </h2>
            </div>
          </Link>

          <div className="p-2 mr-4">
            <button onClick={() => setShowMenu(false)} className="iconButton">
              <AiOutlineClose className=" text-xl" />
            </button>
          </div>
        </div>
        <ul className="capitalize px-2 py-4 space-y-5">
          {navItems.map((navItem) => (
            <Link key={navItem.id} href={navItem.href}>
              <li
                onClick={() => setShowMenu(false)}
                className={` text-secondColor text-base  cursor-pointer  ${
                  asPath === navItem.href && " !text-activeColor cursor-default"
                }`}
              >
                {navItem.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-30 p-1 border-b border-mainColor bg-mainColor">
        <div className=" container flex  items-center justify-between">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src={logo} alt="logo" width="25px" height="25px" />
              <h2 className="text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#794ADC] to-[#FD80FF]">
                Arts
              </h2>
            </div>
          </Link>
          <div className="hidden md:flex mr-10">{menusBig()}</div>
          <div className="block md:hidden mr-2 mt-2">
            <button onClick={() => setShowMenu(true)} className="iconButton">
              <AiOutlineMenuFold className=" text-xl" />
            </button>
          </div>
        </div>
      </nav>
      {showMenu && menusSmall()}
    </>
  );
};

export default Navbar;

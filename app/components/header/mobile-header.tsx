"use client";

import { useEffect, useState } from "react";
import { CloseIcon, HamburgerIcon } from "@/app/utils/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHeader = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const router = usePathname();

  useEffect(() => {
    setMenu(false);
  }, [router]);

  return (
    <>
      <button onClick={() => setMenu((prev) => !prev)} className="sm:hidden">
        {menu ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {menu && (
        <ul className="bg-background-darker sm:hidden z-20 flex p-4 gap-y-4 pb-8 items-start flex-col rounded-xl w-screen max-w-md h-36 absolute top-[160px] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <li className="hover:text-secondary cursor-pointer transition-colors duration-300 text-base md:text-xl">
            <Link href="/generate">ایجاد آیکون</Link>
          </li>
          <li className="hover:text-secondary cursor-pointer transition-colors duration-300 text-base md:text-xl">
            نمونه آیکون ها
          </li>
          <li className="hover:text-secondary cursor-pointer transition-colors duration-300 text-base md:text-xl">
            ورود
          </li>
        </ul>
      )}
    </>
  );
};
export default MobileHeader;

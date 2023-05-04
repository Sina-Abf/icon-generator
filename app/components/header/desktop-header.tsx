import Link from "next/link";

const DesktopHeader = () => {
  return (
    <ul className="sm:flex gap-x-12 hidden">
      <li className="hover:text-secondary cursor-pointer transition-colors duration-300 text-base md:text-xl">
        <Link href="/generate">ایجاد آیکون</Link>
      </li>
      <li className="hover:text-secondary cursor-pointer transition-colors duration-300 text-base md:text-xl">
        نمونه آیکون ها
      </li>
    </ul>
  );
};
export default DesktopHeader;

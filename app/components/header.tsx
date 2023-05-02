import Button from "./ui/button";

const Header = () => {
  return (
    <header className="mb-24">
      <nav className="flex items-center justify-between text-sm md:text-md lg:text-lg gap-x-4">
        <div>Logo</div>
        <ul className="flex gap-x-12">
          <li>ایجاد آیکون</li>
          <li>نمونه آیکون ها</li>
        </ul>
        <div>
          <Button>ورود</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

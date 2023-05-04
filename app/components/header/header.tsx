import MobileHeader from "./mobile-header";
import Button from "../ui/button";
import DesktopHeader from "./desktop-header";
const Header = () => {
  return (
    <header className="mb-24">
      <nav className="flex items-center justify-between text-sm md:text-md lg:text-lg gap-x-4">
        <Button className="bg-primary hidden sm:block">ورود</Button>
        <MobileHeader />
        <DesktopHeader />
        <div className="flex items-center gap-4">
          <span>Logo</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

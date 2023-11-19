import Logo from "./logo";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import ThemeToggler from "./theme-toggler";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="container flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav 
            containerStyles="hidden xl:flex gap-x-8 item-center" 
            LinkStyles="relative hover:text-primary transition-all" 
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"/>
            <ThemeToggler />
            <div>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

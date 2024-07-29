import { useState } from "react";
import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-transparent h-[80px] md:h-[130px]">
      <MainMenu
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      {isMobileMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;

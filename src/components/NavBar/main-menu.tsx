import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logo.png";

interface MainMenuProps {
  setIsMobileMenuOpen: (Status: boolean) => void;
  isMobileMenuOpen: boolean;
}
const MainMenu: React.FC<MainMenuProps> = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-6 py-3 h-[100%]">
      <div className="relative flex h-[100%] items-center justify-between">
        <div className="flex flex-1 items-center justify-center :justify-start">
          <div className="hidden sm:ml-6 md:block  w-fit">
            <div className="flex space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-12 w-fit">
              <a
                href="#"
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                DIVISIONS
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                PROMOTIONS
              </a>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center w-full px-4 md:px-0  md:w-fit justify-between md:justify-center md:items-center ">
            <img
              className="h-[60px] w-auto mx-[0px] md:mx-[30px]"
              src={Logo}
              alt="Your Company"
            />
            <GiHamburgerMenu
              size={40}
              color="white"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
          <div className="hidden sm:ml-6 md:block  w-fit">
            <div className="flex space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-12 w-fit">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
              >
                NEWS & EVENTS
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                CAREER
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

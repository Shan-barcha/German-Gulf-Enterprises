const MobileMenu = () => {
  return (
    <div className="absolute bg-white w-full h-full" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a
          href="#"
          className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
        >
          ABOUT US
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          DIVISIONS
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          PROMOTIONS
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          NEWS & EVENTS
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          CAREER
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;

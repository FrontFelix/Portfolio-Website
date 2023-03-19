export default function DesktopNavbar() {
  return (
    <div>
      <nav className="relative px-8 lg:px-8 xl:px-0 flex justify-between items-center text-white container-width">
        <a className="text-3xl font-bold leading-none" href="#">
          Felix
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-white">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:w-auto gap-8 text-white">
          <li>
            <a className="text-sm hover:text-gray-500" href="#">
              Hem
            </a>
          </li>
          <li>
            <a className="text-sm  hover:text-gray-500" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-sm  hover:text-gray-500" href="#">
              Rekommendationer
            </a>
          </li>
          <li>
            <a className="text-sm  hover:text-gray-500" href="#">
              Kontakt
            </a>
          </li>
        </ul>
        {/* <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a> */}
      </nav>
    </div>
  );
}

import { Link, NavLink } from "react-router-dom";
import nav from "./Nav.module.css";

const Nav = () => {
  return (
    <div className="">
   
      <nav
        className={`flex items-center justify-between flex-wrap bg-gray-950   ${nav.nav} `}
        dir="rtl"
      >
        <div className="w-full block  justify-center flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm bg-red- mx-auto justify-center text-center lg:flex-grow">
            <NavLink
              href="#responsive-header"
              className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-gray-600 hover:rounded-lg duration-700"
              to="/cv"
            >
              صفحه اصلی
            </NavLink>
            <Link
              href="#responsive-header"
              className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-gray-600 hover:rounded-lg duration-700"
              to="/skill"
            >
              مهارت ها
            </Link>

            <Link
              href="#responsive-header"
              className="block  mb-5  p-2 lg:inline-block lg:mt-5  text-white hover:bg-gray-600 hover:rounded-lg duration-700"
              to="/sample"
            >
              نمونه کارها
            </Link>
       
          </div>
        </div>
      </nav>
    
    </div>
  );
};

export default Nav;

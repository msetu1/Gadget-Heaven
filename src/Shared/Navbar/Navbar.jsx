import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const NavBar = () => {
  const { pathname } = useLocation()
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-none font-bold underline underline-offset-4 " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-none font-bold underline underline-offset-4 text-[#9538E2]" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-none font-bold underline underline-offset-4 text-[#9538E2]" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-now"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-none font-bold underline underline-offset-4 text-[#9538E2]" : ""
          }
        >
          Contact Now
        </NavLink>
      </li>
     
    </>
  );

  return (
    <div className={`navbar  px-10  pt-4 mx-auto fixed z-10`}>
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  "
          >
            {links}
          </ul>
        </div>
        <a className={`btn btn-ghost text-xl font-sora ${pathname ==='/' && 'hidden'}`}>Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal text-[18px] space-x-3 ${pathname==='/' && 'text-white'} `}>
         {links}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-x-5">
        <div>
          <BsCart3 className="text-2xl bg-white rounded-full p-1 shadow-2xl" />
        </div>
        <div>
          <CiHeart className="text-2xl bg-white rounded-full p-1 shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

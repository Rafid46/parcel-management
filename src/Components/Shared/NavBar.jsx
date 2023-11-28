import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 1.8,
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", delay: 0.5 }}
    >
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
          <li className="text-xl mr-10 font-semibold text-[#02c39a]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="text-xl mr-10 font-semibold text-[#02c39a]">
            <NavLink
              to="/dashboard/allParcels"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              DASHBOARD
            </NavLink>
          </li>
          <li className="text-3xl mr-10 font-semibold text-[#02c39a] transform transition-transform duration-300 hover:rotate-45">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              <IoMdNotificationsOutline />
            </NavLink>
          </li>
          <li>
            <Link to="/login">
              <motion.div
                variants={nextVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/login">
                  <button className="right-4 text-sm lg:text-xl font-semibold hover:bg-transparent coolBeans rounded-none hover:text-white">
                    L o g i n
                  </button>
                </Link>
              </motion.div>
            </Link>
          </li>
          <li></li>
        </nav>
      </div>
    </motion.div>
  );
  return (
    <div className="">
      <div className="navbar mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm p-5 dropdown-content flex items-center justify-center z-[1] shadow bg-gray-900 rounded-box w-fit text-xl"
            >
              {links}
            </ul>
          </div>
          <a className="">
            <img
              className="hidden lg:inline w-[80px] h-[50px]"
              src={logo}
              alt=""
            />
            <p className="text-4xl font-bol text-[#00FFE1] font-Com"></p>
          </a>
        </div>
        <div className="navbar hidden  lg:flex">
          <ul className="menu-horizontal px-1">{links}</ul>
        </div>
        <div className="ml-56 lg:ml-0">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <summary tabIndex={0} className="btn btn-ghost rounded-btn">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </summary>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <a className="cursor-not-allowed">{user?.displayName}</a>
                  </li>
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
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
  const links = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", delay: 0.5 }}
    >
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
          <li className="text-xl mr-20 font-semibold text-[#02c39a]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="text-xl mr-20 font-semibold text-[#02c39a]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              DASHBOARD
            </NavLink>
          </li>
          <li className="text-3xl mr-20 font-semibold text-[#02c39a] transform transition-transform duration-300 hover:rotate-45">
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
            <motion.div
              variants={nextVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/login">
                <button className="text-sm lg:text-xl font-semibold hover:bg-transparent coolBeans rounded-none hover:text-white">
                  L o g i n
                </button>
              </Link>
            </motion.div>
          </li>
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
              className="menu menu-sm dropdown-content flex items-center justify-center z-[1] shadow bg-gray-900 rounded-box w-[200px] text-xl"
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
        <div className="navbar-end">
          {/* <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          ></label> */}
          {/* {user ? (
            <div>
              <details className="dropdown">
                <summary className="">
                  <img
                    className="rounded-full w-[40px] h-[40px] mr-2 mb-5"
                    src={user.photoURL}
                  />
                </summary>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="text-gray-500 hover:text-orange-500 hover:bg-gray-300">
                    <Link to="/myAddedFood">
                      <a>My added food items</a>
                    </Link>
                  </li>

                  <li className="text-gray-500  hover:text-orange-500 hover:bg-gray-300">
                    <Link to="/addProduct">
                      <a>Add a food item</a>
                    </Link>
                  </li>

                  <li className="text-gray-500  hover:text-orange-500 hover:bg-gray-300">
                    <Link to="/myOrderedFood">
                      <a>My ordered food items</a>
                    </Link>
                  </li>
                </ul>
              </details>
              <p className="text-2xl font-thin text-white mr-2">
                {user.displayName}
              </p>
              <button
                onClick={handleSignOut}
                className="btn rounded-none coolBeans hover:text-orange-500"
              >
                L O G O U T
              </button>
            </div>
          ) : (
            <motion.div
              variants={nextVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/login">
                <button className="btn coolBeans rounded-none hover:text-orange-500">
                  L o g i n
                </button>
              </Link>
            </motion.div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

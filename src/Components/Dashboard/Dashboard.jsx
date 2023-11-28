import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoStatsChart } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { LuPackageOpen } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import useUser from "../Hooks/useUser";
/* eslint-disable react/no-unknown-property */
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // const isAdmin = true;
  const [prof] = useUser();
  console.log(prof);
  return (
    <div className="flex">
      {prof?.role === "admin" ? (
        <>
          <div className="">
            <aside className="flex h-full flex-col w-64 px-5 py-8 bg-gray-900">
              <a className="flex">
                <img className="w-auto h-7 mr-5" src={logo} alt="" />
                <p className="text-white font-bold font-poppins">SWIFT</p>
              </a>

              <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="flex-1 -mx-3 space-y-3 ">
                  <NavLink
                    to="/"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 active:bg-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="mx-2 text-sm font-medium">Admin Home</span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/allParcels"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <LuPackage />
                    <span className="mx-2 text-sm font-medium">
                      All Parcels
                    </span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/allUsers"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    <span className="mx-2 text-sm font-medium">All Users</span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/allDeliveryman"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <MdDeliveryDining />
                    <span className="mx-2 text-sm font-medium">
                      All Delivery Man
                    </span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/statistics"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <IoStatsChart />

                    <span className="mx-2 text-sm font-medium">Statistics</span>
                  </NavLink>
                  <hr />
                </nav>
                <div className="mt-6">
                  <div className="flex items-center justify-between mt-6">
                    <a className="flex items-center gap-x-2">
                      <img
                        className="object-cover rounded-full h-7 w-7"
                        src={user?.photoURL}
                        alt="avatar"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {user?.displayName}
                      </span>
                    </a>

                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
            <hr />
          </div>
        </>
      ) : prof?.role === "user" ? (
        <>
          <div className="h-screen">
            <aside className="flex h-full flex-col w-64 px-5 py-8 bg-gray-900">
              <a className="flex">
                <img className="w-auto h-7 mr-5" src={logo} alt="" />
                <p className="text-white font-bold font-poppins">SWIFT</p>
              </a>

              <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="flex-1 -mx-3 space-y-3 ">
                  <NavLink
                    to="/"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 active:bg-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <span className="mx-2 text-sm font-medium">Home</span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/bookParcel"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <LuPackageOpen />

                    <span className="mx-2 text-sm font-medium">
                      Book a Parcel
                    </span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/myParcels"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <LuPackage />

                    <span className="mx-2 text-sm font-medium">My Parcels</span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/myProfile"
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <CgProfile />

                    <span className="mx-2 text-sm font-medium">
                      My Profile menu
                    </span>
                  </NavLink>
                </nav>
                <div className="mt-6">
                  <div className="flex items-center justify-between mt-6">
                    <a className="flex items-center gap-x-2">
                      <img
                        className="object-cover rounded-full h-7 w-7"
                        src={user?.photoURL}
                        alt="avatar"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {user?.displayName}
                      </span>
                    </a>

                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </>
      ) : (
        <>
          <NavLink
            to="/"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 active:bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Home</span>
          </NavLink>

          <NavLink
            to="/dashboard/bookParcel"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <LuPackageOpen />

            <span className="mx-2 text-sm font-medium">Book a Parcel</span>
          </NavLink>

          <NavLink
            to="/dashboard/myParcels"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <LuPackage />

            <span className="mx-2 text-sm font-medium">My Parcels</span>
          </NavLink>

          <NavLink
            to="/dashboard/myProfile"
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <CgProfile />

            <span className="mx-2 text-sm font-medium">My Profile menu</span>
          </NavLink>
        </>
      )}
      {/* {prof?.role === "admin" (
        <div className="">
          <aside className="flex h-full flex-col w-64 px-5 py-8 bg-gray-900">
            <a className="flex">
              <img className="w-auto h-7 mr-5" src={logo} alt="" />
              <p className="text-white font-bold font-poppins">SWIFT</p>
            </a>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav className="flex-1 -mx-3 space-y-3 ">
                <NavLink
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 active:bg-slate-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium">Admin Home</span>
                </NavLink>

                <NavLink
                  to="/dashboard/allParcels"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <LuPackage />
                  <span className="mx-2 text-sm font-medium">All Parcels</span>
                </NavLink>

                <NavLink
                  to="/dashboard/allUsers"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                  <span className="mx-2 text-sm font-medium">All Users</span>
                </NavLink>

                <NavLink
                  to="/dashboard/allDeliveryman"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <MdDeliveryDining />
                  <span className="mx-2 text-sm font-medium">
                    All Delivery Man
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard/statistics"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <IoStatsChart />

                  <span className="mx-2 text-sm font-medium">Statistics</span>
                </NavLink>
                <hr />
               
              </nav>
              <div className="mt-6">
                <div className="flex items-center justify-between mt-6">
                  <a className="flex items-center gap-x-2">
                    <img
                      className="object-cover rounded-full h-7 w-7"
                      src={user?.photoURL}
                      alt="avatar"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {user?.displayName}
                    </span>
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
          <hr />
        </div>
      ) : prof?.role === "user"? 
       <> <NavLink
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 active:bg-slate-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium">Home</span>
                </NavLink>

                <NavLink
                  to="/dashboard/bookParcel"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <LuPackageOpen />

                  <span className="mx-2 text-sm font-medium">
                    Book a Parcel
                  </span>
                </NavLink>

                <NavLink
                  to="/dashboard/myParcels"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <LuPackage />

                  <span className="mx-2 text-sm font-medium">My Parcels</span>
                </NavLink>

                <NavLink
                  to="/dashboard/myProfile"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <CgProfile />

                  <span className="mx-2 text-sm font-medium">
                    My Profile menu
                  </span>
                </NavLink>
      </>: 
      <>
          <NavLink
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 active:bg-slate-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium">Home</span>
                </NavLink>

                <NavLink
                  to="/dashboard/bookParcel"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <LuPackageOpen />

                  <span className="mx-2 text-sm font-medium">
                    Book a Parcel
                  </span>
                </NavLink>

                <NavLink
                  to="/dashboard/myParcels"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <LuPackage />

                  <span className="mx-2 text-sm font-medium">My Parcels</span>
                </NavLink>

                <NavLink
                  to="/dashboard/myProfile"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <CgProfile />

                  <span className="mx-2 text-sm font-medium">
                    My Profile menu
                  </span>
                </NavLink>
      </>
     }  */}

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

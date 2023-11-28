import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoStatsChart } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { LuPackageOpen } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
/* eslint-disable react/no-unknown-property */
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = true;
  return (
    <div className="flex">
      {isAdmin ? (
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
                  to="/dashboard/myProfile"
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <IoStatsChart />

                  <span className="mx-2 text-sm font-medium">Statistics</span>
                </NavLink>
                <hr />
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
          <hr />
        </div>
      ) : (
        // <div
        //   id="docs-sidebar"
        //   className="w-64 bg-gray-800 border-e border-gray-200 pt-7 pb-10 overflow-y-auto"
        // >
        //   <div className="px-6">
        //     <a
        //       className="flex-none text-xl font-semibold dark:text-white"
        //       href="#"
        //       aria-label="Brand"
        //     >
        //       Brand
        //     </a>
        //   </div>
        //   <nav
        //     className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        //     data-hs-accordion-always-open
        //   >
        //     <ul className="space-y-1.5">
        //       <li>
        //         <a
        //           className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //           href="#"
        //         >
        //           <svg
        //             className="w-4 h-4"
        //             xmlns="http://www.w3.org/2000/svg"
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             stroke="currentColor"
        //             stroke-width="2"
        //             stroke-linecap="round"
        //             stroke-linejoin="round"
        //           >
        //             <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        //             <polyline points="9 22 9 12 15 12 15 22" />
        //           </svg>
        //           Dashboard
        //         </a>
        //       </li>

        //       <li className="hs-accordion" id="users-accordion">
        //         <NavLink to="/dashboard/bookParcel">
        //           <button
        //             type="button"
        //             className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //           >
        //             <svg
        //               className="w-4 h-4"
        //               xmlns="http://www.w3.org/2000/svg"
        //               width="24"
        //               height="24"
        //               viewBox="0 0 24 24"
        //               fill="none"
        //               stroke="currentColor"
        //               stroke-width="2"
        //               stroke-linecap="round"
        //               stroke-linejoin="round"
        //             >
        //               <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        //               <circle cx="9" cy="7" r="4" />
        //               <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        //               <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        //             </svg>
        //             Users
        //             {/* <svg
        //               className="hs-accordion-active:block ms-auto hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
        //               xmlns="http://www.w3.org/2000/svg"
        //               width="24"
        //               height="24"
        //               viewBox="0 0 24 24"
        //               fill="none"
        //               stroke="currentColor"
        //               stroke-width="2"
        //               stroke-linecap="round"
        //               stroke-linejoin="round"
        //             >
        //               <path d="m18 15-6-6-6 6" />
        //             </svg> */}
        //             {/* <svg
        //               className="hs-accordion-active:hidden ms-auto block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
        //               width="16"
        //               height="16"
        //               viewBox="0 0 16 16"
        //               fill="none"
        //               xmlns="http://www.w3.org/2000/svg"
        //             >
        //               <path
        //                 d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
        //                 stroke="currentColor"
        //                 stroke-width="2"
        //                 stroke-linecap="round"
        //               ></path>
        //             </svg> */}
        //           </button>
        //         </NavLink>
        //       </li>

        //       <li className="hs-accordion" id="account-accordion">
        //         <NavLink to="/dashboard/myParcels">
        //           <button
        //             type="button"
        //             className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //           >
        //             <svg
        //               className="w-4 h-4"
        //               xmlns="http://www.w3.org/2000/svg"
        //               width="24"
        //               height="24"
        //               viewBox="0 0 24 24"
        //               fill="none"
        //               stroke="currentColor"
        //               stroke-width="2"
        //               stroke-linecap="round"
        //               stroke-linejoin="round"
        //             >
        //               <circle cx="18" cy="15" r="3" />
        //               <circle cx="9" cy="7" r="4" />
        //               <path d="M10 15H6a4 4 0 0 0-4 4v2" />
        //               <path d="m21.7 16.4-.9-.3" />
        //               <path d="m15.2 13.9-.9-.3" />
        //               <path d="m16.6 18.7.3-.9" />
        //               <path d="m19.1 12.2.3-.9" />
        //               <path d="m19.6 18.7-.4-1" />
        //               <path d="m16.8 12.3-.4-1" />
        //               <path d="m14.3 16.6 1-.4" />
        //               <path d="m20.7 13.8 1-.4" />
        //             </svg>
        //             Account
        //           </button>
        //         </NavLink>
        //       </li>

        //       <li className="hs-accordion" id="projects-accordion">
        //         <button
        //           type="button"
        //           className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //         >
        //           <svg
        //             className="w-4 h-4"
        //             xmlns="ƒhttp://www.w3.org/2000/svg"
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             stroke="currentColor"
        //             stroke-width="2"
        //             stroke-linecap="round"
        //             stroke-linejoin="round"
        //           >
        //             <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
        //             <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
        //             <path d="M15 2v5h5" />
        //           </svg>
        //           Projects
        //         </button>

        //         <div
        //           id="projects-accordion"
        //           className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
        //         >
        //           <ul className="pt-2 ps-2">
        //             <li>
        //               <a
        //                 className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //                 href="#"
        //               >
        //                 Link 1
        //               </a>
        //             </li>
        //             <li>
        //               <a
        //                 className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //                 href="#"
        //               >
        //                 Link 2
        //               </a>
        //             </li>
        //             <li>
        //               <a
        //                 className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //                 href="#"
        //               >
        //                 Link 3
        //               </a>
        //             </li>
        //           </ul>
        //         </div>
        //       </li>

        //       <li>
        //         <a
        //           className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //           href="#"
        //         >
        //           <svg
        //             className="w-4 h-4"
        //             xmlns="http://www.w3.org/2000/svg"
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             stroke="currentColor"
        //             stroke-width="2"
        //             stroke-linecap="round"
        //             stroke-linejoin="round"
        //           >
        //             <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        //             <line x1="16" x2="16" y1="2" y2="6" />
        //             <line x1="8" x2="8" y1="2" y2="6" />
        //             <line x1="3" x2="21" y1="10" y2="10" />
        //             <path d="M8 14h.01" />
        //             <path d="M12 14h.01" />
        //             <path d="M16 14h.01" />
        //             <path d="M8 18h.01" />
        //             <path d="M12 18h.01" />
        //             <path d="M16 18h.01" />
        //           </svg>
        //           Calendar
        //         </a>
        //       </li>
        //       <li>
        //         <a
        //           className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        //           href="#"
        //         >
        //           <svg
        //             className="w-4 h-4"
        //             xmlns="http://www.w3.org/2000/svg"
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             stroke="currentColor"
        //             stroke-width="2"
        //             stroke-linecap="round"
        //             stroke-linejoin="round"
        //           >
        //             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        //             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        //           </svg>
        //           Documentation
        //         </a>
        //       </li>
        //     </ul>
        //   </nav>
        // </div>
        <div className="">
          <aside className="flex  h-screen flex-col w-64 px-5 py-8 overflow-y-auto bg-gray-900">
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
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium">
                    Book a Parcel
                  </span>
                </NavLink>

                <NavLink
                  to="/dashboard/myParcels"
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
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium">My Parcels</span>
                </NavLink>

                <NavLink
                  to="/dashboard/myProfile"
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
      )}

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdOutlineSystemUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookParcel");
      return res.data;
    },
  });
  const { data: deliUsers = [] } = useQuery({
    queryKey: ["deliUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      refetch();
      return res.data.filter((user) => user.role === "deliveryMan");
    },
  });
  //   assign on the way
  const handleAssign = (user) => {
    axiosSecure.patch(`/bookParcel/${user._id}`).then((res) => {
      refetch();
      console.log(res);
      Swal.fire("status updated");
    });
  };
  //   assign deliver
  const handleDeliver = (user) => {
    axiosSecure.patch(`/bookParcel/deliver/${user._id}`).then((res) => {
      refetch();
      console.log(res);
      Swal.fire("status updated");
    });
  };
  //   assign deliver
  const handleCancel = (user) => {
    axiosSecure.patch(`/bookParcel/cancel/${user._id}`).then((res) => {
      refetch();
      console.log(res);
      Swal.fire("status updated");
    });
  };
  // update
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const deliveryMan = form.deliveryMan.value;
    const man = {
      deliveryMan,
    };
    console.log(man);
    // const { _id } = users;
    console.log(users);
    axiosSecure.post("/bookParcel", man).then((res) => {
      console.log(man.id);
      refetch();
      Swal.fire("delivery man added");
      console.log(res, "user added");
    });
  };
  return (
    <div>
      <div className="mt-10">
        <section className="container px-4 mx-auto mt-10 h-screen">
          <p className="text-center text-4xl text-blue-900 font-bold mb-10">
            All parcels
          </p>
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <button className="flex items-center gap-x-2">
                              <span>Status</span>
                              <svg
                                className="h-3"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.1"
                                />
                                <path
                                  d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.1"
                                />
                                <path
                                  d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  stroke-width="0.3"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Customer
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Number of parcel booked
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Requested delivery date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Manage
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Assign
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    {users.map((user) => (
                      <tbody
                        key={user._id}
                        className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                      >
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div className="inline-flex items-center py-1 px-3  bg-purple-200/60 rounded-full">
                              <span className="text-white">{user.status}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                  {user.name}
                                </h2>
                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  {user.email}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-gray-300 bg-emerald-100/60 dark:bg-gray-800">
                              {user.number}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {user.bookingDate}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                              {user.requestedDeliveryDate}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                              {/* Open the modal using document.getElementById('ID').showModal() method */}
                              <button
                                className="text-xl"
                                onClick={() =>
                                  document
                                    .getElementById("my_modal_2")
                                    .showModal()
                                }
                              >
                                <MdOutlineSystemUpdate></MdOutlineSystemUpdate>
                              </button>
                              <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                  <div className="flex flex-col items-center">
                                    <label className="mb-5">
                                      Select Delivery Man:
                                    </label>
                                    <form onSubmit={handleSubmit}>
                                      <select
                                        className="px-5 py-2 mr-5 w-[300px] rounded-full"
                                        name="deliveryMan"
                                      >
                                        {deliUsers.map((deliveryMan) => (
                                          <option key={deliveryMan._id}>
                                            {deliveryMan.name} - ID
                                            {deliveryMan._id}
                                          </option>
                                        ))}
                                      </select>

                                      <button className="btn">Update</button>
                                    </form>
                                  </div>
                                </div>
                                <form
                                  method="dialog"
                                  className="modal-backdrop"
                                >
                                  <button>close</button>
                                </form>
                              </dialog>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-blue-500 bg-emerald-100/60 dark:bg-gray-800">
                              <details className="dropdown dropdown-left dropdown-end">
                                <summary className="m-1 cursor-pointer">
                                  Assign
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                  <li>
                                    <a onClick={() => handleAssign(user)}>
                                      on the way
                                    </a>
                                  </li>
                                  <li onClick={() => handleDeliver(user)}>
                                    <a>delivered returned</a>
                                  </li>
                                  <li onClick={() => handleCancel(user)}>
                                    <a>cancel</a>
                                  </li>
                                </ul>
                              </details>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-blue-500 bg-emerald-100/60 dark:bg-gray-800">
                              $ {user.price}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllParcels;

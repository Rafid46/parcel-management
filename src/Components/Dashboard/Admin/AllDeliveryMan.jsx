import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliUsers = [], refetch } = useQuery({
    queryKey: ["deliUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      refetch();
      return res.data.filter((user) => user.role === "deliveryMan");
    },
  });
  return (
    <div>
      <table className="w-full h-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-lg">
            <th scope="col" className="p-4"></th>
            <th scope="col" className="px-6 py-3">
              Delivery man's name
            </th>
            <th scope="col" className="px-6 py-3">
              Number
            </th>
            <th scope="col" className="px-6 py-3">
              Number of parcel delivered
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {deliUsers.map((item) => (
            <tr
              key={item._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4"></td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <td className="px-6 py-4 text-lg font-bold">{item.name}</td>
              </th>
              <td className="px-6 py-4 text-lg font-bold">{item.number}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 text-lg font-bold"></div>${" "}
                  {item.price}
                </div>
              </td>
              <td className="px-6 py-4">
                <p>hello</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDeliveryMan;

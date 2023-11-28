/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import Ani from "../../../assets/F4g2o6WZSX.json";
import { Link } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import Map from "react-map-gl";
const MyParcels = () => {
  //   const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookParcel/?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(parcels);
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center">
        <p className="text-4xl font-bold mb-20 mt-20 text-blue-950">
          My Parcels
        </p>
        <div className="w-[200px]" data-aos="zoom-out" data-aos-delay="100">
          <Lottie animationData={Ani} loop={true}></Lottie>
        </div>
      </div>
      <Link
        to="/dashboard/payment"
        className="flex items-center justify-center mb-10"
      >
        <button className="px-5 py-2 text-lg font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
          PAY
        </button>
      </Link>
      <div className="font-poppins grid grid-cols-1 lg:grid-cols-2 gap-6">
        {parcels.map((parcel) => (
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="p-5 h-64 bg-gray-300 rounded-lg shadow-md">
                <p className="pb-2 text xl text-gray-800 font-semibold">
                  Requested delivery date:{" "}
                  <span className="text-sm text-gray-400">
                    {parcel.requestedDeliveryDate}
                  </span>
                </p>
                <p className=" pb-2 text xl text-gray-800 font-semibold">
                  Booking Date:{" "}
                  <span className="text-sm text-gray-400">
                    {parcel.bookingDate}
                  </span>
                </p>
                <p className="pb-2 text xl text-gray-800 font-semibold">
                  Delivery Men ID:{parcel.deliveryMan}
                </p>
                <p className="pb-2 text xl text-gray-800 font-semibold">
                  Booking Status:{" "}
                  <span className="text-white text-sm font-medium bg-green-500 rounded-lg p-1">
                    {parcel.status}
                  </span>
                </p>
                <Link>
                  <div className="flex items-center justify-end">
                    <button className="px-5 py-2 text-lg font-semibold text-blue-500 uppercase transition-colors duration-300 transform border-2 border-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                      <span>
                        Review <MdReviews></MdReviews>
                      </span>
                    </button>
                  </div>
                </Link>
              </div>

              <div className="w-60 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800  dark:text-white">
                  {parcel.parcelType}
                </h3>

                <div className="flex items-center justify-between px-3 py-2">
                  <span className="font-bold text-[#02c39a]">
                    $ {parcel.price}
                  </span>
                  <Link to="/dashboard/update">
                    <button className="px-4 py-2 text-lg font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <Map
          mapLib={import("mapbox-gl")}
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div> */}
    </div>
  );
};

export default MyParcels;

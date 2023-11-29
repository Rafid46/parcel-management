/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import Ani from "../../../assets/F4g2o6WZSX.json";
import { Link } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
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
      {parcels.length ? (
        <Link
          to="/dashboard/payment"
          className=" flex items-center justify-center mb-10"
        >
          <button className="px-5 w-[200px] py-2 text-lg font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700">
            P A Y
          </button>
        </Link>
      ) : (
        <Link className="flex items-center justify-center mb-10">
          <button
            disabled
            className="px-5 py-2 text-lg font-semibold text-white uppercase transition-colors duration-300 transform bg-green-500 rounded hover:bg-gray-700 focus:outline-none"
          >
            PAY
          </button>
        </Link>
      )}

      <div className="max-w-screen-3xl ml-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {parcels.map((parcel) => (
            <div className="flex flex-col bg-gray-100 rounded-3xl w-[450px]">
              <div className="sm:p-7">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div>
                    <h2 className="text-md tracking-tighter text-gray-600 font-semibold lg:text-xl">
                      Requested delivery date:{" "}
                      <span className="text-sm font-normal">
                        {parcel.requestedDeliveryDate}
                      </span>
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-black">
                      Booking date{" "}
                      <span className="text-gray-500 font-normal">
                        {parcel.bookingDate}
                      </span>
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      Status:{" "}
                      <span className="text-white font-normal bg-green-400 p-2 rounded-md w-fit">
                        {parcel.status}
                      </span>
                    </p>
                    <p className="mt-2 text-sm  font-semibold">
                      Delivery Men ID: {parcel.deliveryMan}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center">
                      <span className="text-5xl font-light tracking-tight text-black">
                        $ {parcel.price}
                      </span>
                      <span className="text-base font-medium text-gray-500 ml-5">
                        <IoIosArrowDroprightCircle />
                        {parcel.parcelType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-evenly pb-8">
                <Link to={`/dashboard/update/${parcel._id}`}>
                  <div className="w-[200px]">
                    <a
                      aria-describedby="tier-company"
                      className="flex items-center justify-center px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full  hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Update
                    </a>
                  </div>
                </Link>
                <Link to={`/dashboard/update/${parcel._id}`}>
                  <div className="w-[100px]">
                    <a
                      aria-describedby="tier-company"
                      className="flex items-center justify-center  px-6 py-2.5 text-center text-black duration-200  border-2 border-black rounded-full  hover:bg-black hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Review
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
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

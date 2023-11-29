/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import ani from "../../../assets/yAUYFslg6U.json";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Update = () => {
  const { id } = useParams();
  //   const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [parcelWeight, setParcelWeight] = useState(1);
  const [price, setPrice] = useState(50);
  const axiosSecure = useAxiosSecure();
  const calculatePrice = (e) => {
    if (parcelWeight === 1) {
      setPrice(50);
    } else if (parcelWeight === 2) {
      setPrice(100);
    } else if (parcelWeight > 2) {
      setPrice(150 * parcelWeight);
    } else {
      // Handle invalid input or default case
      setPrice(0);
    }
  };
  //   const updateData = {
  //     name: data.name,
  //     email: data.email,
  //     number: data.number,
  //     price: data.price,
  //     parcelType: data.parcelType,
  //     parcelWeight: data.parcelWeight,
  //     receiverName: data.receiverName,
  //     receiverNumber: data.receiverNumber,
  //     address: data.address,
  //     requestedDeliveryDate: data.requestedDeliveryDate,
  //     bookingDate: data.bookingDate,
  //     deliveryAddressLat: data.deliveryAddressLat,
  //     deliveryAddressLong: data.deliveryAddressLong,
  //     status: data.status,
  //   };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["bookParcel", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookParcel/${id}`);
      return res.data;
    },
  });
  //   const {
  //     number,
  //     parcelType,
  //     receiverName,
  //     receiverNumber,
  //     address,
  //     bookingDate,
  //     requestedDeliveryDate,
  //     deliveryAddressLat,
  //     deliveryAddressLong,
  //   } = users[0];
  //   const [data] = users;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const updateInfo = {
      number: data.number || data.number,
      parcelType: data.parcelType || data.parcelType,
      receiverName: data.receiverName || data.receiverName,
      address: data.address || data.address,
      bookingDate: data.bookingDate || data.bookingDate,
      requestedDeliveryDate:
        data.requestedDeliveryDate || data.requestedDeliveryDate,
      deliveryAddressLat: data.deliveryAddressLat || data.deliveryAddressLat,
      deliveryAddressLong: data.deliveryAddressLong || data.deliveryAddressLong,
    };
    console.log(updateInfo);
    axiosSecure.patch(`/bookParcelUpdate/${id}`, updateInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Parcel updated",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <div className="">
        <section className="bg-white h-screen">
          <main className="flex items-center justify-center">
            <div className="">
              <div
                className="flex justify-between items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <h1 className="mt-6 font-poppins text-2xl font-bold text-purple-500 sm:text-3xl md:text-4xl">
                  Update your parcel
                </h1>
                <div className="w-[300px]">
                  <Lottie animationData={ani} loop={true}></Lottie>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-2"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Your Name
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="100"
                    type="text"
                    {...register("name")}
                    placeholder={user.displayName}
                    value={user.displayName}
                    readOnly
                    id="FirstName"
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>

                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Email
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="200"
                    type="text"
                    id="LastName"
                    {...register("email")}
                    placeholder={user.email}
                    value={user.email}
                    readOnly
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Phone number
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    type="number"
                    id="LastName"
                    defaultValue={users[0]?.number}
                    {...register("number")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Price
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="400"
                    type="number"
                    id="LastName"
                    defaultValue={users[0]?.price}
                    // value={price}
                    readOnly
                    {...register("price")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Parcel Type
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="500"
                    type="text"
                    id="LastName"
                    defaultValue={users[0]?.parcelType}
                    {...register("parcelType")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Parcel Weight
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="600"
                    type="number"
                    id="LastName"
                    defaultValue={users[0]?.parcelWeight}
                    {...register("parcelWeight")}
                    value={parcelWeight}
                    onChange={(e) => {
                      setParcelWeight(parseInt(e.target.value));
                      calculatePrice();
                    }}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Receiver’s Name
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="700"
                    type="text"
                    defaultValue={users[0]?.receiverName}
                    id="LastName"
                    {...register("receiverName")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Receiver's Phone Number
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="800"
                    type="text"
                    id="LastName"
                    defaultValue={users[0]?.receiverNumber}
                    {...register("receiverNumber")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Parcel Delivery Address
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="900"
                    type="text"
                    id="LastName"
                    defaultValue={users[0]?.address}
                    {...register("address")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Booking Date
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="1000"
                    type="text"
                    id="LastName"
                    defaultValue={users[0]?.bookingDate}
                    {...register("bookingDate")}
                    // defaultValue={new Date()}
                    readOnly
                    value={new Date()}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Requested Delivery Date
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="1100"
                    type="date"
                    id="LastName"
                    defaultValue={users[0]?.requestedDeliveryDate}
                    {...register("requestedDeliveryDate")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Delivery Address Latitude
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="1200"
                    type="number"
                    id="LastName"
                    defaultValue={users[0]?.deliveryAddressLat}
                    {...register("deliveryAddressLat")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Delivery Address longitude
                  </label>

                  <input
                    data-aos="zoom-out"
                    data-aos-delay="1300"
                    type="number"
                    id="LastName"
                    defaultValue={users[0]?.deliveryAddressLong}
                    {...register("deliveryAddressLong")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 w-96 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Status
                  </label>
                  <input
                    data-aos="zoom-out"
                    data-aos-delay="1400"
                    type="text"
                    value={"pending"}
                    placeholder="pending"
                    defaultValue={users.status}
                    readOnly
                    {...register("status")}
                    className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-500 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="rounded-md border  bg-purple-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Update parcel
                  </button>
                </div>
              </form>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Update;

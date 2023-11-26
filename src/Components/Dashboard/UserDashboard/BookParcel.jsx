import Lottie from "lottie-react";
import ani from "../../../assets/yAUYFslg6U.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const BookParcel = () => {
  const { user } = useContext(AuthContext);
  const [parcelWeight, setParcelWeight] = useState(1);
  const [price, setPrice] = useState(50);
  const axiosPublic = useAxiosPublic();
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const userData = {
      name: data.name,
      email: data.email,
      number: data.number,
      price: data.price,
      parcelType: data.parcelType,
      parcelWeight: data.parcelWeight,
      receiverName: data.receiverName,
      receiverNumber: data.receiverNumber,
      address: data.address,
      requestedDeliveryDate: data.requestedDeliveryDate,
      bookingDate: data.bookingDate,
      deliveryAddressLat: data.deliveryAddressLat,
      deliveryAddressLong: data.deliveryAddressLong,
      status: data.status,
    };
    axiosPublic.post("/bookParcel", userData).then((res) => {
      console.log(res.data, "user added");
      reset(), Swal.fire("parcel booked");
    });
  };
  return (
    <div>
      <div>
        <section className="bg-white">
          <div className="">
            <main className="flex items-center justify-center">
              <div className="max-w-xl lg:max-w-3xl">
                <a className="block text-blue-600" href="/">
                  <span className="sr-only">Home</span>
                </a>

                <section
                  className="flex justify-between items-center"
                  data-aos="zoom-out"
                  data-aos-delay="100"
                >
                  <h1 className="mt-6 text-2xl font-bold text-blue-500 sm:text-3xl md:text-4xl">
                    Book a Parcel
                  </h1>
                  <div className="w-[300px]">
                    <Lottie animationData={ani} loop={true}></Lottie>
                  </div>
                </section>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <div className="w-96 col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      {...register("name")}
                      placeholder={user.displayName}
                      value={user.displayName}
                      readOnly
                      id="FirstName"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("email")}
                      placeholder={user.email}
                      value={user.email}
                      readOnly
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </label>

                    <input
                      type="number"
                      id="LastName"
                      {...register("number")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>

                    <input
                      type="number"
                      id="LastName"
                      value={price}
                      readOnly
                      {...register("price")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Parcel Type
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("parcelType")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Parcel Weight
                    </label>

                    <input
                      type="number"
                      id="LastName"
                      {...register("parcelWeight")}
                      value={parcelWeight}
                      onChange={(e) => {
                        setParcelWeight(parseInt(e.target.value));
                        calculatePrice();
                      }}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Receiver’s Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("receiverName")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Receiver's Phone Number
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("receiverNumber")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Parcel Delivery Address
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("address")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Booking Date
                    </label>

                    <input
                      type="date"
                      id="LastName"
                      {...register("bookingDate")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Requested Delivery Date
                    </label>

                    <input
                      type="date"
                      id="LastName"
                      {...register("requestedDeliveryDate")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Delivery Address Latitude
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("deliveryAddressLat")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Delivery Address longitude
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      {...register("deliveryAddressLong")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      value={"pending"}
                      placeholder="pending"
                      readOnly
                      {...register("status")}
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Book
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookParcel;

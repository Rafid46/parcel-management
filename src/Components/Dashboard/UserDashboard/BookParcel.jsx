import Lottie from "lottie-react";
import ani from "../../../assets/yAUYFslg6U.json";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const BookParcel = () => {
  const { user } = useContext(AuthContext);
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

                <form className="mt-8 grid grid-cols-6 gap-6">
                  <div className="w-96 col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder={user.displayName}
                      value={user.displayName}
                      id="FirstName"
                      name="first_name"
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
                      name="last_name"
                      placeholder={user.email}
                      value={user.email}
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
                      name="last_name"
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
                      name="last_name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 w-96 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Parcel number
                    </label>

                    <input
                      type="number"
                      id="LastName"
                      name="last_name"
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
                      name="last_name"
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
                      name="last_name"
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
                      name="last_name"
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
                      name="last_name"
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
                      name="last_name"
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
                      name="last_name"
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
                      name="last_name"
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

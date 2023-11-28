/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

/* eslint-disable react/no-unknown-property */
const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: profile = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });
  const [list] = profile;
  console.log(list);
  console.log();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (user) => {
    console.log(user);
    const userInfo = {
      photoURL: user.photoURL,
    };
    axiosSecure.patch(`/users/${list._id}`, userInfo).then((res) => {
      console.log(res.data);
      Swal.fire("photo uploaded");
      refetch();
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="w-full max-w-md px-8 py-4  bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-28 h-28 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={list?.photoURL}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            {list?.name}
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            {list?.email}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="your image"
              {...register("photoURL")}
              className="mb-2 mt-1 w-full rounded-sm border-gray-200 shadow-sm sm:text-sm"
            />
            <button className="btn rounded-sm">Update</button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyProfile;

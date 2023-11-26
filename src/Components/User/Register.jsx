import Lottie from "lottie-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import signUpAni from "../../assets/Animation - 1700820136096.json";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(data.name, data.photoURL).then(() => {
        // console.log("user profile updated");
        const userInfo = {
          name: data.name,
          email: data.email,
          photoURL: data.photoURL,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added");
            reset();
            navigate("/");
          }
        });
      });
      console.log(loggedUser);
    });
  };
  return (
    <div>
      <section className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-center text-5xl font-bold mr-5">
            Welcome to Swift
          </p>
          <img className="w-[75px]" src={logo} alt="" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <section
            className="w-[700px]"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <Lottie animationData={signUpAni} loop={true}></Lottie>
          </section>
          <main className="" data-aos="zoom-out" data-aos-delay="300">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    placeholder="name"
                    {...register("name")}
                    type="text"
                    className="mt-1 w-60  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Your photo
                  </label>
                  <input
                    placeholder="photo"
                    {...register("photoURL")}
                    type="text"
                    className="mt-1 w-60  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    placeholder="email"
                    type="email"
                    {...register("email")}
                    className="mt-1 w-60  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    {...register("password")}
                    placeholder="password"
                    type="password"
                    className="mt-1 w-60 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="mb-5">
                  <button className="inline-block shrink-0 rounded-md border  bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Sign Up
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login">
                    <span className="cursor-pointer hover:text-blue-600 ml-2 text-gray-700 underline">
                      Login
                    </span>
                  </Link>
                </p>
                <button className="mt-5 bg-white flex items-center text-gray-700 dark:text-gray-900 justify-center gap-x-3 text-sm sm:text-base  dark:bg-white dark:border-gray-700 dark:hover:bg-gray-200 rounded-lg hover:bg-gray-100 duration-300 transition-colors px-8 py-2.5">
                  <svg
                    className="w-5 h-5 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3033_94454)">
                      <path
                        d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3033_94454">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;

import banner from "../../../assets/delivery service.png";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* main container */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mr-10">
          <p className="text-5xl">
            <p className="pb-5 font-semibold bg-gradient-to-r from-teal-500 via-blue-500 to-blue-500 text-transparent bg-clip-text typed">
              Navigate the Future
            </p>
            <p className="text-gray-700">
              of Deliveries with Our Parcel Expertise.
            </p>
          </p>
          <a
            style={{ "--clr": "#02c39a" }}
            className="butto mt-5 cursor-pointer"
          >
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                ></path>
              </svg>

              <svg
                className="button__icon-svg  button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                ></path>
              </svg>
            </span>
            Explore All
          </a>
          <button></button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
        >
          <img className="w-[600px]" src={banner} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

import Lottie from "lottie-react";
import anm1 from "../../../assets/Wj3p5ubL6h.json";
import anm2 from "../../../assets/gt6ufqTsDp.json";
import anm3 from "../../../assets/6In68acgLz.json";
const Feature = () => {
  return (
    <section className="max-w-screen-xl mx-auto mb-20">
      <div className="mb-10">
        <p className="text-4xl text-center font-bold text-blue-900">
          Our Features
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 lg:gap-19">
        <div
          className="w-[400px] h-[200px]"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="w-[400px]">
            <Lottie animationData={anm1} loop={true}></Lottie>
          </div>
          <p className="text-xl font-bold text-blue-500 sm:text-2xl">
            Fastest Service
          </p>
          <p className="text-sm text-gray-600">
            Experience lightning-fast service on our website! Our cutting-edge
            technology ensures swift response times, providing you with a
            seamless user experience.
          </p>
        </div>
        <div
          className="w-[400px] h-[200px]"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <div className="w-[300px] h-[266.66px]">
            <Lottie animationData={anm2} loop={true}></Lottie>
          </div>
          <p className="text-xl font-bold text-blue-500 sm:text-2xl">
            Easy tracking
          </p>
          <p className="text-sm text-gray-600">
            Effortless tracking made simple! With our easy-to-use tracking
            feature, stay in the loop effortlessly. Monitor your parcels or
            services with a user-friendly interface.
          </p>
        </div>
        <div
          className="w-[300px] h-[200px]"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <div className="w-[300px] h-[266.66px]">
            <Lottie animationData={anm3} loop={true}></Lottie>
          </div>
          <p className="text-xl font-bold text-blue-500 sm:text-2xl">
            Cash on delivery
          </p>
          <p className="text-sm text-gray-600">
            Enjoy the convenience of Cash on Delivery (COD) with us! Shop
            confidently and pay when your order arrives at your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;

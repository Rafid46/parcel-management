/* eslint-disable react/jsx-key */
import Lottie from "lottie-react";
import Ani from "../../../assets/OdstnwObdx.json";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
const Statistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookParcel");
      return res.data;
    },
  });
  const [state, setState] = useState({
    series: [
      {
        data: users.map((user) => user.bookingDate),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: users.map((user) => user.bookingDate),
      },
      colors: ["#FF5733"],
    },
  });
  return (
    <div className="h-screen flex items-center justify-evenly">
      <div className="">
        <p className="text-center text-4xl font-bold text-green-500">
          Statistics
        </p>
        <div className="w-[200px]" data-aos="zoom-out" data-aos-delay="100">
          <Lottie animationData={Ani} loop={true}></Lottie>
        </div>
      </div>
      <div data-aos="zoom-out" data-aos-delay="100">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          width={600}
        />
      </div>
    </div>
  );
};
export default Statistics;

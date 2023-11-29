/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const NumberCard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookParcel");
      return res.data;
    },
  });
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  const { data: delivered = [] } = useQuery({
    queryKey: ["delivered"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookParcel");
      //   return res.data.filter((user) => user.role === "deliveryMan");
      return res.data.filter((user) => user.status === "delivered  returned");
    },
  });
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div
          className="w-[300px]  overflow-hidden border-2 border-gray-800  rounded-lg shadow-lg mb-10"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="py-5 text-center">
            <a className="block text-4xl font-bold text-gray-800" tabindex="0">
              <CountUp start={0} end={parcels.length} duration={3} delay={2} />
            </a>
            <span className="text-2xl text-gray-700">Book parcels</span>
          </div>
        </div>
        <div
          className="w-[300px] overflow-hidden border-2 border-gray-800   rounded-lg shadow-lg mb-10"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <div className="py-5 text-center">
            <a className="block text-4xl font-bold text-gray-800" tabindex="0">
              <CountUp start={0} end={users.length} duration={3} delay={2} />
            </a>
            <span className="text-2xl text-gray-700">Users</span>
          </div>
        </div>
        <div
          className="w-[300px] overflow-hidden border-2 border-gray-800   rounded-lg shadow-lg mb-10"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <div className="py-5 text-center">
            <a className="block text-4xl font-bold text-gray-800" tabindex="0">
              <CountUp
                start={0}
                end={delivered.length}
                duration={3}
                delay={2}
              />
            </a>
            <span className="text-2xl text-gray-700">Parcel Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCard;

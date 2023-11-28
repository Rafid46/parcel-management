import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const NumberCard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: parcels = [], refetch } = useQuery({
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
  return (
    <div>
      <div className="grid grid-cols-2">
        <div
          className="w-1/2  overflow-hidden border-2 border-gray-800  rounded-lg shadow-lg"
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
          className="w-1/2 overflow-hidden border-2 border-gray-800   rounded-lg shadow-lg"
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
      </div>
    </div>
  );
};

export default NumberCard;

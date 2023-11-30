/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
// import image1 from "../../../assets/image1.JPG";
// import image2 from "../../../assets/image2.JPG";
// import image3 from "../../../assets/image3.JPG";
// import image4 from "../../../assets/image4.JPG";
// import image5 from "../../../assets/image5.JPG";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const DeliveryManSection = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliUsers = [], refetch } = useQuery({
    queryKey: ["deliUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      refetch();
      return res.data.filter((user) => user.role === "deliveryMan");
    },
  });
  console.log(deliUsers);
  return (
    <div>
      <p className="text-4xl text-center font-bold text-green-400 mb-10">
        Our top delivery men
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto ml-20 lg:ml-0">
        {deliUsers.map((users) => (
          <div className="" data-aos="zoom-out" data-aos-delay="100">
            <a
              href="#"
              className="group relative block bg-black w-[300px] h-[300px]"
            >
              <img
                alt="Developer"
                src={users.photoURL}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {users.name}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryManSection;

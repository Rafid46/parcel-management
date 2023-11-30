import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://parcel-management-server-zeta.vercel.app/health",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

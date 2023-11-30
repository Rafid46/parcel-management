import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://parcel-management-server-zeta.vercel.app/health",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;

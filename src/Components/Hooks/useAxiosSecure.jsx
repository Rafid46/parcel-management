import axios from "axios";

const axiosSecure = axios.create({ baseURL: "http://localhost:5020/health" });
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;

import axios from "axios";

const axiosPublic = axios.create({ baseURL: "http://localhost:5020/health" });
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

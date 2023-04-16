import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "identity"
    }
  });
  return response.data;
};
const axiosClient = { get }
export default axiosClient
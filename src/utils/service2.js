import axios from "axios";
const baseUrl = "http://localhost:3001/data/api.mock.json";

const Service = async () => {
  //   return axios
  //     .get(baseUrl)
  //     .then((data) => data)
  //     .catch();

  try {
    const { data } = await axios.get(baseUrl);
    //   console.log("======DATA", data);
    return data;
  } catch {}
};

export default Service;

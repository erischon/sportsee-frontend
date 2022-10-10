import axios from "axios";

// const baseUrl = `${process.env.REACT_APP_DEV_URL}/data/mainGetMock.json`;
const baseUrl = "http://localhost:3000/user/12";

const Service = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log("======DATA", data.data);
    return data.data;
  } catch {}
};

export default Service;

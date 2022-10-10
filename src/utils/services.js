import axios from "axios";

// const baseUrl = `${process.env.REACT_APP_DEV_URL}/data/mainGetMock.json`;
const baseUrl = "http://localhost:3000/user/12";

const Service = async () => {
  const { data } = await axios.get(baseUrl);

  return data.data;
};

export default Service;

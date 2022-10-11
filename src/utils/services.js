import axios from "axios";

const baseUrl = `${process.env.REACT_APP_DEV_URL}/mockedData/mainGetMock.json`;
// const baseUrl = "http://localhost:3000/user/12";
// const baseUrl = "http://localhost:3001/mockedData/12/mainGet.json";

const Service = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log("======DATA", data.data);
    return { data };
  } catch {}
};

export default Service;

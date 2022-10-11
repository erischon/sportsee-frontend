import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    try {
      axios.get(url).then((res) => setUserData(res.data));
    } catch (err) {
      console.log("Error : ", err);
    }
  }, [url]);

  return userData?.data;
};

export default useFetch;

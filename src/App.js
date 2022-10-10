import { useState, useEffect } from "react";
import Service from "./utils/services";

function App() {
  // const [userData, setUserData] = useState([]);

  // const getData = () => {
  //   const data = Service();

  //   setUserData(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const userData = Service();
  console.log(Object.userData.id);

  return (
    <div className="App">
      <h1>SportSee</h1>

      {/* {userData && userData.map((user) => <h1>user.id</h1>)} */}
      {userData.id}
    </div>
  );
}

export default App;

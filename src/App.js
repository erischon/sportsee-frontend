import useFetch from "./hooks/useFetch";
import Service from "./utils/services";

// const API_URL = "http://localhost:3000/user/12";
const API_URL = "http://localhost:3001/mockedData/12/mainGet.json";

Service();

function App() {
  const userData = useFetch(API_URL);

  console.log("======USERDATA", userData);

  return (
    <div className="App">
      <h1>SportSee</h1>

      {/* {userData && userData.map((user) => <h1>user.id</h1>)} */}
      {userData?.id}
    </div>
  );
}

export default App;

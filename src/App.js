import useFetch from "./hooks/useFetch";
import serviceMock, {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./utils/services";

// const API_URL = "http://localhost:3000/user/12";
// const API_URL = "http://localhost:3001/data/12/main.json";
const API_URL = `${process.env.REACT_APP_DEV_URL}/data/api.mock.json`;

function App() {
  // const userData = useFetch(API_URL);

  const userData = getUserMainData(12);
  const userActivity = getUserActivity(12);
  const userSessions = getUserAverageSessions(12);
  const userPerformance = getUserPerformance(12);

  console.log("======USERDATA", userData);
  console.log("======ACTIVITY", userActivity);
  console.log("======SESSIONS", userSessions);
  console.log("======PERFORMANCE", userPerformance);

  return (
    <div className="App">
      <h1>SportSee</h1>

      {/* {userData && userData.map((user) => <h1>user.id</h1>)} */}
      {userData?.id}
    </div>
  );
}

export default App;

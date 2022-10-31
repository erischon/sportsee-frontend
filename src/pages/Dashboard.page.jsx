import { useParams, Navigate } from "react-router-dom";

import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageScoreChart from "../components/Charts/AverageScoreChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";
import KeyInfos from "../components/KeyInfos/KeyInfos.component";
// import { GetUserMainData } from "../utils/services.prod";

import fetchDashboardDataDev from "../utils/fetchDashboardData.dev";

const API_URL = "http://localhost:3000";

const Dashboard = () => {
  const params = useParams();
  const userId = parseInt(params.id);

  const {
    userMainData,
    userAverageScore,
    userActivity,
    userAverageSessions,
    userActivityType,
  } = fetchDashboardDataDev(userId);

  // const userMainData = useFetch(`${API_URL}/user/${userId}`);
  // console.log("======USER_MAIN_DATA", userMainData);
  // const userActivityData = new User(userMainData);

  // if (userData) {
  //   user = new User(userData);
  // }

  // if (user === undefined) {
  //   return <Navigate to="/404" replace />;
  // }

  return (
    <main className="dashboard">
      <section className="infos">
        <h1>Bonjour {userMainData.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="charts">
        <div className="container-left">
          <div className="top">
            <ActivityChart sessions={userActivity} />
          </div>

          <div className="bottom">
            <AverageSessionsChart sessions={userAverageSessions} />
            <ActivityTypeChart performance={userActivityType} />
            <AverageScoreChart averageScore={userAverageScore} />
          </div>
        </div>

        <div className="container-right">
          <KeyInfos userMainData={userMainData} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

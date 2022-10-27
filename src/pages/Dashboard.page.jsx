import { useParams, Navigate } from "react-router-dom";

import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageScoreChart from "../components/Charts/AverageScoreChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";
import KeyInfos from "../components/KeyInfos/KeyInfos.component";
import useFetch from "../hooks/useFetch";
// import { getUserMainData } from "../utils/services.prod";
import { getUserMainData } from "../utils/services.dev";

const API_URL = "http://localhost:3000";

const Dashboard = () => {
  const params = useParams();

  const userId = parseInt(params.id);
  const user = getUserMainData(userId);

  // const user = useFetch("http://localhost:3000/user/18");
  // const user = useFetch(`${API_URL}/user/${userId}`);

  console.log("======USER_IN_DASHBOARD", user);

  if (!user) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="dashboard">
      <section className="infos">
        <h1>Bonjour {user.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="charts">
        <div className="container-left">
          <div className="top">
            <ActivityChart userId={userId} />
          </div>

          <div className="bottom">
            <AverageSessionsChart userId={userId} />
            <ActivityTypeChart userId={userId} />
            <AverageScoreChart userId={userId} />
          </div>
        </div>

        <div className="container-right">
          <KeyInfos userId={userId} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageScoreChart from "../components/Charts/AverageScoreChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";
import KeyInfos from "../components/KeyInfos/KeyInfos.component";

import fetchDashboardDataDev from "../utils/fetchDashboardData.dev";
import useFetch from "../hooks/useFetch";

const API_URL = "http://localhost:3000";

const Dashboard = () => {
  const params = useParams();
  const userId = parseInt(params.id);
  const mode = process.env.REACT_APP_MODE;

  const [mainData, setMainData] = useState();
  const [averageScore, setAverageScore] = useState();
  const [activitySessions, setActivitySessions] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [activityType, setActivityType] = useState();

  useEffect(() => {
    // if (mode === "development") {
    // const {
    //   userMainData,
    //   userAverageScore,
    //   userActivitySessions,
    //   userAverageSessions,
    //   userActivityType,
    // } = fetchDashboardDataDev(userId);

    console.log("======Toto");
    // console.log("======USER_MAIN_DATA", userMainData);

    // setMainData(userMainData);
    // setAverageScore(userAverageScore);
    // setActivitySessions(userActivitySessions);
    // setAverageSessions(userAverageSessions);
    // setActivityType(userActivityType);
    // }
  }, []);

  console.log("======MAIN_DATA", mainData);
  console.log("======AVERAGE_SCORE", averageScore);

  // const {
  //   userMainData,
  //   userAverageScore,
  //   userActivitySessions,
  //   userAverageSessions,
  //   userActivityType,
  // } = fetchDashboardDataDev(userId);

  // const userMainData = useFetch(`${API_URL}/user/${userId}`);
  // console.log("======USER_MAIN_DATA", userMainData);
  // const userAverageScore = useFetch(`${API_URL}/user/${userId}`);
  // const userActivity = useFetch(`${API_URL}/user/${userId}/activity`);
  // const userAverageSessions = useFetch(
  //   `${API_URL}/user/${userId}/average-sessions`
  // );
  // const userActivityType = useFetch(`${API_URL}/user/${userId}/performance`);

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
        <h1>Bonjour {mainData?.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className="charts">
        <div className="container-left">
          <div className="top">
            <ActivityChart sessions={activitySessions} />
          </div>

          <div className="bottom">
            <AverageSessionsChart sessions={averageSessions} />
            <ActivityTypeChart performance={activityType} />
            <AverageScoreChart averageScore={averageScore} />
          </div>
        </div>

        <div className="container-right">
          <KeyInfos userMainData={mainData} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

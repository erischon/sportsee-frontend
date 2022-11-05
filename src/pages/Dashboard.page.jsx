import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import ActivityChart from "../components/Charts/ActivityChart.component";
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.component";
import AverageScoreChart from "../components/Charts/AverageScoreChart.component";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart.component";
import KeyInfos from "../components/KeyInfos/KeyInfos.component";

import fetchDashboardDataDev from "../utils/fetchDashboardData.dev";
import FetchDashboardDataProd from "../utils/FetchDashboardData.prod";

const Dashboard = () => {
  const params = useParams();
  const userId = parseInt(params.id);
  const mode = process.env.REACT_APP_MODE;

  const [userExist, setUserExist] = useState(false);
  const [loading, setLoading] = useState(false);

  const [mainData, setMainData] = useState();
  const [averageScore, setAverageScore] = useState();
  const [activitySessions, setActivitySessions] = useState();
  const [averageSessions, setAverageSessions] = useState();
  const [activityType, setActivityType] = useState();

  useEffect(() => {
    if (mode === "development") {
      const userMainData = fetchDashboardDataDev(userId);
      setLoading(true);

      userMainData ? setUserExist(true) : setUserExist(false);

      if (userExist) {
        const {
          userMainData,
          userAverageScore,
          userActivitySessions,
          userAverageSessions,
          userActivityType,
        } = fetchDashboardDataDev(userId);

        setMainData(userMainData);
        setAverageScore(userAverageScore);
        setActivitySessions(userActivitySessions);
        setAverageSessions(userAverageSessions);
        setActivityType(userActivityType);
      }
    }

    if (mode === "production") {
      const userMainData = null;

      FetchDashboardDataProd(userId)
        .then((data) => {
          setLoading(true);
          data ? setUserExist(true) : setUserExist(false);

          if (userExist) {
            const {
              userMainData,
              userAverageScore,
              userActivitySessions,
              userAverageSessions,
              userActivityType,
            } = data;

            setMainData(userMainData);
            setAverageScore(userAverageScore);
            setActivitySessions(userActivitySessions);
            setAverageSessions(userAverageSessions);
            setActivityType(userActivityType);
          }
        })
        .catch((err) => {
          console.log("======ERROR", err);
        });
    }
  }, [userId, mode, userExist]);

  if (loading && !userExist) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="dashboard">
      <section className="infos">
        <p>{mode}</p>
        <h1>Bonjour {mainData?.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>

      <section className="charts">
        <div className="container-left">
          <div className="top">
            {activitySessions ? (
              <ActivityChart sessions={activitySessions} />
            ) : (
              <p>Désolé, il n'y a aucune données</p>
            )}
          </div>

          <div className="bottom">
            {averageSessions ? (
              <AverageSessionsChart sessions={averageSessions} />
            ) : (
              <p>Désolé, il n'y a aucune données</p>
            )}

            {activityType ? (
              <ActivityTypeChart performance={activityType} />
            ) : (
              <p>Désolé, il n'y a aucune données</p>
            )}

            {averageScore ? (
              <AverageScoreChart averageScore={averageScore} />
            ) : (
              <p>Désolé, il n'y a aucune données</p>
            )}
          </div>
        </div>

        <div className="container-right">
          {mainData ? (
            <KeyInfos userMainData={mainData} />
          ) : (
            <p>Désolé, il n'y a aucune données</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

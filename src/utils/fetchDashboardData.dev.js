import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./services.dev";

const fetchDashboardDataDev = (userId) => {
  //
  const userMainData = getUserMainData(userId);
  const userAverageScore = [{ score: userMainData.todayScore * 100 }];

  //
  const userActivityData = getUserActivity(userId);
  const userActivitySessions = userActivityData.sessions;

  //
  const userAverageSessionsData = getUserAverageSessions(userId);
  const userAverageSessions = userAverageSessionsData.sessions;

  //
  const userActivityTypeData = getUserPerformance(userId);
  const userActivityType = userActivityTypeData.data;

  const allUserData = {
    userMainData: userMainData,
    userAverageScore: userAverageScore,
    userActivitySessions: userActivitySessions,
    userAverageSessions: userAverageSessions,
    userActivityType: userActivityType,
  };

  return allUserData;
};

export default fetchDashboardDataDev;

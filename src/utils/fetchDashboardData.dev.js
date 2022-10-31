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
  const userActivity = userActivityData.sessions;

  //
  const userAverageSessionsData = getUserAverageSessions(userId);
  const userAverageSessions = userAverageSessionsData.sessions;

  //
  const userActivityTypeData = getUserPerformance(userId);
  const userActivityType = userActivityTypeData.data;

  const allUserData = {
    userMainData: userMainData,
    userAverageScore: userAverageScore,
    userActivity: userActivity,
    userAverageSessions: userAverageSessions,
    userActivityType: userActivityType,
  };

  return allUserData;
};

export default fetchDashboardDataDev;

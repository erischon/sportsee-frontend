import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./services.prod";

const fetchDashboardDataProd = (userId) => {
  // Verify if user exist
  try {
    const userMainData = getUserMainData(userId);

    return userMainData;
  } catch {}

  if (userMainData) {
    const userAverageScore = [{ score: userMainData.todayScore * 100 }];

    const userActivityData = getUserActivity(userId);
    const userActivitySessions = userActivityData.sessions;

    const userAverageSessionsData = getUserAverageSessions(userId);
    const userAverageSessions = userAverageSessionsData.sessions;

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
  } else {
    const allUserData = null;

    return allUserData;
  }
};

export default fetchDashboardDataProd;

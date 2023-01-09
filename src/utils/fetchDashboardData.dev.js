import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./services.dev";

/**
 * Get the data for user dashboard sections in dev mode
 * @param {number} userId
 * @returns {Object}
 */
const fetchDashboardDataDev = (userId) => {
  // Verify if user exist
  const userMainData = getUserMainData(userId);

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

export default fetchDashboardDataDev;

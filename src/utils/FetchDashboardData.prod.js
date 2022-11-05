import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./services.prod";

const fetchDashboardDataProd = async (userId) => {
  let userMainData = null;
  // Verify if user exist
  try {
    userMainData = await getUserMainData(userId);

    if (!userMainData) {
      return null;
    }

    if (userMainData) {
      const userAverageScore = [{ score: userMainData.todayScore * 100 }];

      const userActivityData = await getUserActivity(userId);
      const userActivitySessions = userActivityData.sessions;

      const userAverageSessionsData = await getUserAverageSessions(userId);
      const userAverageSessions = userAverageSessionsData.sessions;

      const userActivityTypeData = await getUserPerformance(userId);
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
  } catch (err) {
    console.log("======ERROR", err);
    return null;
  }
};

export default fetchDashboardDataProd;

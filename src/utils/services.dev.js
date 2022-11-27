import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data";

import User from "../models/User";
import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import Performance from "../models/Performance";

/**
 * Get the user data from Mocked Data
 * @param {*} userId
 * @returns {Object}
 */
const getUserMainData = (userId) => {
  try {
    const userData = USER_MAIN_DATA.find((item) => item.id === userId);

    return new User(userData);
  } catch {}
};

/**
 * Get the user activity data from Mocked Data
 * @param {number} userId
 * @returns {Object}
 */
const getUserActivity = (userId) => {
  try {
    const userData = USER_ACTIVITY.find((item) => item.userId === userId);

    return new Activity(userData);
  } catch {}
};

/**
 * Get the user average sessions data from Mocked Data
 * @param {*} userId
 * @returns {Object}
 */
const getUserAverageSessions = (userId) => {
  try {
    const userData = USER_AVERAGE_SESSIONS.find(
      (item) => item.userId === userId
    );

    return new AverageSessions(userData);
  } catch {}
};

/**
 * Get the user performance data from Mocked Data
 * @param {*} userId
 * @returns {Object}
 */
const getUserPerformance = (userId) => {
  try {
    const userData = USER_PERFORMANCE.find((item) => item.userId === userId);

    return new Performance(userData);
  } catch {}
};

export {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

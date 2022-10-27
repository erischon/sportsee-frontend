import axios from "axios";

import User from "../models/User";
import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import Performance from "../models/Performance";

const API_URL = "http://localhost:3000";

const USER_ACTIVITY = "";
const USER_AVERAGE_SESSIONS = "";
const USER_PERFORMANCE = "";

/**
 *
 * @param {*} userId
 * @returns
 */
const getUserMainData = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    const userData = response.data.data;

    return new User(userData);
  } catch (err) {
    console.log(err);
  }
};

/**
 *
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
 *
 * @param {*} userId
 * @returns
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
 *
 * @param {*} userId
 * @returns
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

import axios from "axios";

import User from "../models/User";
import Activity from "../models/Activity";
import AverageSessions from "../models/AverageSessions";
import Performance from "../models/Performance";

const API_URL = "http://localhost:3000";

/**
 *
 * @param {number} userId
 * @returns
 */
const getUserMainData = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    const userData = response.data.data;

    return new User(userData);
  } catch (err) {
    console.log("getUserMainData error: ", err);
    return;
  }
};

/**
 *
 * @param {number} userId
 * @returns {Object}
 */
const getUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/activity`);
    const userData = response.data.data;

    return new Activity(userData);
  } catch (err) {
    console.log("getUserActivity error: ", err);
  }
};

/**
 *
 * @param {*} userId
 * @returns
 */
const getUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(
      `${API_URL}/user/${userId}/average-sessions`
    );
    const userData = response.data.data;

    return new AverageSessions(userData);
  } catch (err) {
    console.log("getUserAverageSessions error: ", err);
  }
};

/**
 *
 * @param {*} userId
 * @returns
 */
const getUserPerformance = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/performance`);
    const userData = response.data.data;

    return new Performance(userData);
  } catch (err) {
    console.log("getUserPerformance error: ", err);
  }
};

export {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

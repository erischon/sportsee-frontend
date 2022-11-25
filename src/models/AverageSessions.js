/** Average Sessions Model */
export default class AverageSessions {
  /**
   *
   * @param {Object} data
   * @param {number} data.userId
   * @param {Object[]} data.sessions
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map(({ day, sessionLength }) => ({
      day: this.getDayName(day),
      sessionLength: sessionLength,
    }));
  }

  /**
   * Get the first letter of the day
   * @param {string} day
   * @returns {string}
   */
  getDayName = (day) => {
    const weekday = ["L", "M", "M", "J", "V", "S", "D"];

    return weekday[day - 1];
  };
}

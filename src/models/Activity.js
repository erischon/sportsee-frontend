/** Activity Model */
export default class Activity {
  /**
   * @param {Object} data
   * @param {number} data.userId
   * @param {Object[]} data.sessions
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map(({ day, kilogram, calories }) => ({
      day: this.getDay(day),
      kilogram: kilogram,
      calories: calories,
    }));
  }

  /**
   * Get the day of month
   * @param {string} date
   * @returns {number}
   */
  getDay = (date) => {
    const dateObj = new Date(date);

    return dateObj.getUTCDate();
  };
}

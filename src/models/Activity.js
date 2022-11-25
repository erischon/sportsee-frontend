/** Activity Model */
export default class Activity {
  userId;
  sessions;

  /**
   *
   * @param {*} data
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
   *
   * @param {*} date
   * @returns
   */
  getDay = (date) => {
    const dateObj = new Date(date);

    return dateObj.getUTCDate();
  };
}

export default class AverageSessions {
  userId;
  sessions;

  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map(({ day, sessionLength }) => ({
      day: this.getDayName(day),
      sessionLength: sessionLength,
    }));
  }

  getDayName = (day) => {
    const weekday = ["L", "M", "M", "J", "V", "S", "D"];

    return weekday[day - 1];
  };
}

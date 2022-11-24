/** */
export default class User {
  userId;
  firstName;
  lastName;
  age;
  todayScore;
  calorieCount;
  proteinCount;
  carbohydrateCount;
  lipidCount;

  /**
   *
   * @param {*} data
   */
  constructor(data) {
    this.userId = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore;
    this.calorieCount = data.keyData.calorieCount;
    this.proteinCount = data.keyData.proteinCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
  }
}

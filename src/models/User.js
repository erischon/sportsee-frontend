/** */
export default class User {
  /**
   * @param {Object} data
   * @param {number} data.userId
   * @param {{firstName: string, lastName: string, age: number}} data.userInfos
   * @param {number} data.todayScore
   * @param {{calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number}} data.keyData
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

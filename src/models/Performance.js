/** Performance Model */
export default class Performance {
  /**
   * @param {Object} data
   * @param {number} data.userId
   * @param {{1: string, 2: string, 3: string, 4: string, 5: string, 6: string }} data.kind
   * @param {{value: number, kind: number}} data.data
   */
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((entry) => ({
      value: entry.value,
      kind: this.kind[entry.kind],
    }));
    this.data = this.data.reverse();
  }
}

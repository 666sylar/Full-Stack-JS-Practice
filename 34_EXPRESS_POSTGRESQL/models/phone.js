class Phone {
  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM phones
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundPhones = await Phone.pool.query(selectAllQuery);
      return foundPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getAllById (whereClause) {
    try {
      const selectQuery = `
        SELECT *
        FROM phones
        JOIN phones_to_orders ON phones.id = phones_to_orders.phone_id
        JOIN orders ON phones_to_orders.order_id = orders.id
        JOIN customers ON orders.user_id = customers.id
        ${whereClause}
      `;
      const foundPhones = await Phone.pool.query(selectQuery);
      return foundPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = Phone;

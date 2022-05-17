import pool from "../config/db.js";

class Shop {
    
    static async getData(q) {
        const query = await pool.execute(q)
        return query
    }
}

export default Shop


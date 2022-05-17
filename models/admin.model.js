import pool from "../config/db.js";

class Admin {

    static async add(q, datas){
        const [query] = await pool.execute(q, [...Object.values(datas)]);
        return query;
    }
    
    static async delete(q) {
    
    }

    static async update(q) {
    
    }

}

export default Admin


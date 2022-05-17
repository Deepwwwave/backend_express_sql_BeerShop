import Shop from "../models/shop.model.js"

export const getAllProducts = async (req,res,next)=>{
    const query = "SELECT name, description, degree, price, category FROM product";
    try {
        const [rows] = await Shop.getData(query);
        console.log(rows)        
    } catch (error) {
        console.log(error)
    }
}

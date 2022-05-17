import Admin from "../models/admin.model.js";


export const addProduct = async (req,res,next)=>{
    const datas = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        path_img: req.body.path_img,
        degree: req.body.degree,
        category: req.body.category,
        quantity: req.body.quantity,
        
    }
    const query = "INSERT INTO product (`name`,`description`, `price`, `path_img`,`degree`, `category`,`quantity`) VALUES (?,?,?,?,?,?,?)";
    try {
        await Admin.add(query, datas);
        console.log(res)
        
    } catch (error) {
        console.log(error)
    }
}
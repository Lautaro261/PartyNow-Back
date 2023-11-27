const { User, Profile, Rol } = require("../db");
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const { SALT } = process.env;

const createUserController = async (input) =>{
    const { email, password, name, rol } = input
    console.log(email, password, name)
    // 1 Busquedo si ya existe 
    const user = await User.findOne({where: {email: email}});
    if(user){
       return null;
    }
    // 2 HASH de password
    const salt = await bcryptjs.genSalt(parseInt(SALT,10));
    const passwordHash = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
        email,
        password: passwordHash,
        rolId: input.rol || 1, // Si no hay rol, se usa 1 por defecto
    });


    //console.log("USER: ",newUser)
    const { id } = newUser?.dataValues
    console.log("tengo id:",id)
    await Profile.create({ userId: id });

    return newUser;

}

module.exports = createUserController;
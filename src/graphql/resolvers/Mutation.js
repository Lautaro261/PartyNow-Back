const { User, Profile } = require("../../db");
const bcryptjs = require("bcryptjs");
const createUserController = require("../../controllers/createUser");
const jwt = require("jsonwebtoken");


const resolversMutation = {
    Mutation:{
        createUser: async(root, {input}) => {

            try {
                const user = await createUserController(input) //FUNCION CONTROLADOR

                if(!user){
                throw new Error(`El usuario con el email: ${input.email}, ya existe.`);
            }
                console.log(user)

                return `User created successfully `;

            } catch (error) {
                console.log(error.message)
                return `${error}`
            }
        }
    }
}

module.exports = resolversMutation;
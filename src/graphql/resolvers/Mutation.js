const { User, Profile } = require("../../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createUserController = require("../../controllers/createUser");
const createPlaceController = require("../../controllers/createPlace");



const resolversMutation = {
    Mutation:{

        databaseLoad: async(root,{input}) =>{

            // CARGAR ROL 
            // CARGAR TIPO DE LUGARES
            // CREAR 3 CLIENTES
            // CREAR 4 ORGANIZADORES
            // CREAR 3 BOLICHES 
            // CREAR 4 EVENTOS  
            
        },



        createUser: async(root, {input}) => {

            try {
                const user = await createUserController(input) //FUNCION CONTROLADOR

                if(!user){
                throw new Error(`El usuario con el email: ${input.email}, ya existe.`);
            }

                return `User created successfully `;

            } catch (error) {
                console.log(error.message)
                return `${error}`
            }
        },

        createPlace: async(root, {input})=>{
            try {
                const place = await createPlaceController(input);

            } catch (error) {
                console.log(error.message)
                return error.message
            }
        }
    }


}

module.exports = resolversMutation;
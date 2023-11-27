const { User, Profile, Rol, Typeofplace } = require("../../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createUserController = require("../../controllers/createUser");
const createPlaceController = require("../../controllers/createPlace");
const data = require ("../../utils/databaseLoad");


const resolversMutation = {
    Mutation:{

        databaseLoad: async(root,{input}) =>{
            const { rols } = input;
    let roleLoading = false;

    try {
        // CARGAR ROL
        if (rols) {
            console.log("Entré!");
            for (const rolData of data.rols) {
                try {
                    const { id, type } = rolData;
                    const existingRol = await Rol.findOne({ where: { id } });

                    if (!existingRol) {
                        await Rol.create({
                            id,
                            type,
                        });

                        console.log(`Rol ${type} creado.`);
                    } else {
                        console.log(`Rol ${type} ya existe.`);
                    }
                } catch (error) {
                    console.error(`Error al crear el rol: ${error.message}`);
                }
            }

            roleLoading = true;
        }

        // CARGAR TIPO DE LUGARES
        // CREAR 4 CLIENTES
        // CREAR 4 ORGANIZADORES
    } catch (error) {
        console.error(`Error general: ${error.message}`);
    } finally {
        const mensaje = roleLoading ? "Carga exitosa" : "Error durante la carga";
        console.log(mensaje);
        return mensaje;
    }
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
const { User, Profile, Rol, Typeofplace } = require("../../db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createUserController = require("../../controllers/createUser");
const createPlaceController = require("../../controllers/createPlace");
const createRolController = require("../../controllers/createRol");
const createTypeOfPlaceController = require("../../controllers/createTypeOfPlace");
const data = require("../../utils/databaseLoad");

const resolversMutation = {
  Mutation: {
    databaseLoad: async (root, { input }) => {
      const { rols, typeofplaces, clients, organizers } = input;
      let roleLoading = false;
      let typeofplacesLoading = false;
      let clientsLoading = false;
      let organizerLoading = false;

      try {
        // CARGAR ROL
        if (rols) {
          for (const rolData of data.rols) {
            try {
              await createRolController(rolData)
            } catch (error) {
              console.error(`Error creating role: ${error.message}`);
            }
          }
          roleLoading = true;
        }

        // CARGAR TIPO DE LUGARES
        if (typeofplaces) {
            for (const placeTypeData of data.typeofplaces) {
                try {
                    await createTypeOfPlaceController(placeTypeData)
                } catch (error) {
                    console.error(`Error creating place type: ${error.message}`);
                }
            }
            typeofplacesLoading = true;
        }

        // CREAR 4 CLIENTES
        if (clients) {
            for (const clientsData of data.clients) {
                try {
                    await createUserController(clientsData)
                    
                } catch (error) {
                    console.error(`Error creating clients: ${error.message}`);
                }
            }
            clientsLoading = true;
        }

        // CREAR 4 ORGANIZADORES
        if (organizers) {
            for (const organizersData of data.organizers) {
                try {
                    await createUserController(organizersData)
                    
                } catch (error) {
                    console.error(`Error creating organizers: ${error.message}`);
                }
            }
            organizerLoading = true;
        }


      } catch (error) {
        console.error(`General error: ${error.message}`);
      } finally {
        const mensaje = roleLoading && typeofplacesLoading && clientsLoading && organizerLoading
          ? "Successful upload"
          : "Error while loading";
        console.log(mensaje);
        return mensaje;
      }
    },

    createUser: async (root, { input }) => {
      try {
        const user = await createUserController(input); 
        if (!user) {
          throw new Error(
            `The user with the email: ${input.email} already exists.`
          );
        }

        return `User created successfully `;
      } catch (error) {
        console.log(error.message);
        return `${error}`;
      }
    },

    createPlace: async (root, { input }) => {
      try {
        const place = await createPlaceController(input);
      } catch (error) {
        console.log(error.message);
        return error.message;
      }
    },
  },
};

module.exports = resolversMutation;

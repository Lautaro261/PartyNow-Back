const getAllPlacesController = require("../../controllers/getAllPlaces")

const resolversQuery = {
    Query:{
        hello: async() =>{
            return "servidor funcionando che :D"
        },

        getAllplaces: async(root,{input})=>{
            try {
                const arrayplaces = await getAllPlacesController(input)

                const response = [
                    {
                        category: "Bienvenido",
                        format: "vertical",
                        places: arrayplaces
                    }
                ] 

                return response
                
            } catch (error) {
                console.log(error.message)
                return error.message
            }
        },

    }
}

module.exports = resolversQuery;
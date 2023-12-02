const getAllPlacesController = require("../../controllers/getAllPlaces")

const resolversQuery = {
    Query:{
        hello: async() =>{
            return "servidor funcionando che :D"
        },

        getAllplaces: async(root,{input})=>{
            try {
                const places = await getAllPlacesController(input)

                return places
                
            } catch (error) {
                console.log(error.message)
                return error.message
            }
        },

    }
}

module.exports = resolversQuery;
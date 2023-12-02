
const resolversQuery = {
    Query:{
        hello: async() =>{
            return "servidor funcionando che :D"
        },

        getAllplaces: async(root,{input})=>{
            try {
                
            } catch (error) {
                console.log(error.message)
                return error.message
            }
        },

    }
}

module.exports = resolversQuery;
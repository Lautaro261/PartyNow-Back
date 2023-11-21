const { User, Profile } = require("../../db");


const resolversMutation = {
    Mutation:{
        createUser: async(root, {input}) => {
            const { email, password, name } = input
            //console.log(email, password, name);

            // 1 Busquedo si ya existe 
            const user = await User.findOne({where: {email: email}});
            if(user){
                console.log("entre al if")
                throw new Error(`El usuario con el email: ${email}. Ya existe.`)
            }


            try {
                const newUser = await User.create({email, password});
                console.log(newUser);
                return `User created successfully name:${name} email:${email}`
            } catch (error) {
                console.log(error.message)
                return `Error: ${error.message}`
            }
        }
    }
}

module.exports = resolversMutation;
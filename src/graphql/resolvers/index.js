const resolversQuery = require("./Query");
const resolversMutation =require("./Mutation");

const resolvers = {...resolversQuery, ...resolversMutation}

module.exports = resolvers
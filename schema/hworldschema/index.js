const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World. GrapQL is brilliant'
            }
        })
    })
});

module.exports = {schema};
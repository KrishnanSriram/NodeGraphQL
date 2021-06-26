const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const BookQuerySchema = require('../../schema/bookschema');
const {GraphQLSchema} = require("graphql");

const schema = new GraphQLSchema({
    query: BookQuerySchema.RootQueryType
})
router.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

module.exports = router;
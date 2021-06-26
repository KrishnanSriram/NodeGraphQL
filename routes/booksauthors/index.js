const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const BookAuthorSchema = require('../../schema/bookandauthorschema');

const {GraphQLSchema} = require("graphql");

const schema = new GraphQLSchema({
    query: BookAuthorSchema.RootQueryType,
    mutation: BookAuthorSchema.RootMutationType
})
router.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

module.exports = router;
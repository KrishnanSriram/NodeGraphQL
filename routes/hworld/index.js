const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const HWSchema = require('./../../schema/hworldschema');

router.use('/graphql', graphqlHTTP({
    schema: HWSchema.schema,
    graphiql: true
}));

module.exports = router;